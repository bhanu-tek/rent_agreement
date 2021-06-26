import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-agreement-form',
  templateUrl: './agreement-form.component.html',
  styleUrls: ['./agreement-form.component.css']
})
export class AgreementFormComponent implements OnInit, OnChanges {
  rentAgreementForm: FormGroup;
  floors = ["G",1,2,3,4,5,6,7,8];
  image: File = null;
  imageUrl;
  @Input() customer;
  responseData;
  @Output() customerData = new EventEmitter;

  constructor(
    private $router: Router,
    private $fb: FormBuilder,
    private $httpService: HttpService,
    private $activatedRoute: ActivatedRoute)
  { }

  ngOnChanges() {
    // this.customer='tenant-details'? 'tenant' : 'landlord'
  }

  ngOnInit(): void {
    this.createAgreementForm();
  }

  createAgreementForm() {
    this.rentAgreementForm = this.$fb.group({
      guardian: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      address: this.$fb.group({
        houseNumber: [null],
        floorNumber: [null],
        district: [null],
        state: [null],
        pinCode: [null]
      }),
      addressProof: [null, [Validators.required]]
    }) 
  }

  onFileSelected() {
    // console.log(this.rentAgreementForm.controls.addressProof.value)
    this.image = this.rentAgreementForm.controls.addressProof.value;
    this.onUpload();
  }

  onUpload() {
    const file = new FormData();
    file.append('file',this.image);
    file.append("upload_preset","rent-agreement");
    file.append("cloud_name", "cnq");
    console.log(file);
    this.$httpService.imageUpload(file).subscribe(res => {
      console.log(res);
      this.imageUrl = res['secure_url'];
    }, err => {
      alert(err.error.error.message);
    })
  }


  onAgreement() {
    this.rentAgreementForm.controls.addressProof.setValue(this.imageUrl);
    console.log(this.rentAgreementForm.value);
    this.$httpService.rentAgreement(this.rentAgreementForm.value, this.customer).subscribe(res => {
      this.customer='tenant-details'? 'tenant' : 'landlord'
      this.customerData.emit(this.rentAgreementForm.value);
      console.log(this.customerData)
      // this.$router.navigate(['payment'], {relativeTo: this.$activatedRoute});
    }, err => {
      alert(err.error.error);
    })
  }

  onLogout() {
    this.$router.navigate(['customer/login']);
    localStorage.removeItem('isLoggedin');
  }

}
