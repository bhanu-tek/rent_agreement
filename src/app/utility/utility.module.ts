import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';

import { AgreementFormComponent } from './agreement-form/agreement-form.component';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [AgreementFormComponent, AddressComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    NgxMatFileInputModule,
  ],
  exports: [
    AgreementFormComponent,
    AddressComponent
  ]
})
export class UtilityModule { }
