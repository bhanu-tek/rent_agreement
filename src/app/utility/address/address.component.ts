import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressForm: FormGroup;
  floors = ["G",1,2,3,4,5,6,7,8];
  propertyDetails;

  constructor(private $fb: FormBuilder,private $httpService: HttpService) { }

  ngOnInit(): void {
    this.addressForm =  this.$fb.group({
      houseNumber: [null],
      floorNumber: [null],
      district: [null],
      state: [null],
      pinCode: [null]
    })
  }

  onAddingAddress() {
    console.log(this.addressForm.value);
    this.$httpService.propertyDetails(this.addressForm.value).subscribe(res => {
      console.log(res);
      this.propertyDetails = res['propertyDetail'];
    },err => {
      console.log(err.error.error);
    })
  }

}
