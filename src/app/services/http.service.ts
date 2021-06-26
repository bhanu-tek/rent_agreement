import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private $http: HttpClient) { }

  registration(customerRegistration) {
    return this.$http.post(`${environment.baseURL}customer/registration`, customerRegistration);
  }

  login(customerLogin) {
    return this.$http.post(`${environment.baseURL}customer/login`, customerLogin);
  }

  rentAgreement(agreementData,customerType) {
    let token = localStorage.getItem('isLoggedin')
    const headers= new HttpHeaders({
      Authorization : `Bearer ${token}`
    });
    return this.$http.post(`${environment.baseURL}customer/${customerType}`, agreementData, { 'headers': headers });
  }

  propertyDetails(propertyDetail) {
    let token = localStorage.getItem('isLoggedin')
    const headers= new HttpHeaders({
      Authorization : `Bearer ${token}`
    });
    return this.$http.post(`${environment.baseURL}customer/property-details`, propertyDetail, { 'headers': headers });
  }

  contractDetails(contractDetail) {
    return this.$http.post(`${environment.baseURL}customer/contract-details`, contractDetail);
  }

  imageUpload(image) {
    return this.$http.post(environment.cloudinaryURL, image);
  }

}
