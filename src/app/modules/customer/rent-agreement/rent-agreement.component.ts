import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-rent-agreement',
  templateUrl: './rent-agreement.component.html',
  styleUrls: ['./rent-agreement.component.css', '../login/login.component.css' ]
})
export class RentAgreementComponent implements OnInit {
  rentAgreementForm: FormGroup;
  floors = [1,2,3,4,5,6,7,8];
  customerType;
  landlord = 'rent-agreement';
  tenant = 'tenant-details';
  propertyDetails;
  landlordData;
  tenantData;

  constructor(
    private $router: Router,
    private $httpService: HttpService,
    private $activatedRoute: ActivatedRoute) 
  { }

  ngOnInit(): void {
    
  }

  gettingLandlordData(event) {
    this.landlordData = event;
  }

  gettingTenantData(event) {
    console.log(event)
    this.tenantData = event;
  }

  onLogout() {
    this.$router.navigate(['customer/login']);
    localStorage.removeItem('isLoggedin');
  }
 
}
