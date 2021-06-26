import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from '../customer.component';
import { RentAgreementComponent } from './rent-agreement/rent-agreement.component';
import { AuthGuard } from './guards/auth.guard';
import { PaymentComponent } from './payment/payment.component';
import { UnauthGuard } from './guards/unauth.guard';
import { UtilityModule } from 'src/app/utility/utility.module';
import { ContractFormComponent } from './contract-form/contract-form.component';

const customerRoutes: Routes = [
  {path: '', component: CustomerComponent, redirectTo: 'registration', pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent, canActivate: [UnauthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [UnauthGuard]},
  {path: 'rent-agreement', canActivate: [AuthGuard], children: [
    {path: '', component: RentAgreementComponent},
    {path: 'payment', component: PaymentComponent}
  ]}
]


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    CustomerComponent,
    RentAgreementComponent,
    PaymentComponent,
    ContractFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(customerRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    NgxMatFileInputModule,
    UtilityModule
  ],
  providers: [AuthGuard]
})
export class CustomerModule { }
