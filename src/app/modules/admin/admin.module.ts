import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { Routes } from '@angular/router';

const adminRoutes: Routes = [
  {path: '', redirectTo: 'admin/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}
]



@NgModule({
  declarations: [LoginComponent, CustomerDataComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
