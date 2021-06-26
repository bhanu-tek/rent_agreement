import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailRegex } from 'src/app/constants/regex';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css', '../login/login.component.css' ]
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  isTenant = false;
  @ViewChild('email') email: ElementRef;

  constructor(
    private $formBuilder: FormBuilder,
    private $router: Router,
    private $httpService: HttpService
  ) { }

  ngOnInit() {
    this.registrationForm = this.$formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(emailRegex)]],
      password: [null, Validators.required],
      customerType: [false]
    });
  }

  onRegistration() {
    console.log(this.isTenant)
    this.registrationForm.value.customerType = this.registrationForm.value.customerType ? 'tenant' : 'landlord';
    console.log(this.registrationForm.value);
    this.$httpService.registration(this.registrationForm.value).subscribe(res => {
      console.log(res);
      this.$router.navigate(['customer/rent-agreement']);
    }, err => {
      this.registrationForm.controls.email.reset()
      this.email.nativeElement.focus()
      return alert(err.error.error);
    })
  }

}
