import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css']
})
export class ContractFormComponent implements OnInit {
  contractForm: FormGroup;
  contractDetails;

  constructor(
    private $fb: FormBuilder,
    private $router: Router,
    private $activatedRoute: ActivatedRoute,
    private $httpService: HttpService)
  { }

  ngOnInit(): void {
    this.contractForm = this.$fb.group({
      monthlyRent: [null, Validators.required],
      security: [null],
      noticePeriod: [],
      renewal: [false]
    })
  }

  onContractDetails() {
    console.log(this.contractForm.value);
    this.$httpService.contractDetails(this.contractForm.value).subscribe(res => {
      console.log(res['contractDetails']);
      this.contractDetails = res['contractDetails'];
      this.$router.navigate(['payment'], {relativeTo: this.$activatedRoute});
    }, err => {
      console.log(err.error.error);
    })
  }

}
