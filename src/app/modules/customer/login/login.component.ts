import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { emailRegex } from 'src/app/constants/regex';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private $formBuilder: FormBuilder,
    private $router: Router,
    private $httpService: HttpService
  ) { }

  ngOnInit() {
    this.loginForm = this.$formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(emailRegex)]],
      password: [null, Validators.required]
    });
  }

  onLogin() {
    if (!this.loginForm.valid) {
      return alert('all fields are required');
    }
    console.log(this.loginForm.value);
    this.$httpService.login(this.loginForm.value).subscribe(res => {
      console.log(res);
      localStorage.setItem('isLoggedin', res['token']);
      return this.$router.navigate(['customer/rent-agreement']);
    }, err => {
      alert(err.error.error);
    })
  }


}
