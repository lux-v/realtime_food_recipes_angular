import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//shared
import { SharedModule } from '../../shared/shared.module';
//components
import { SignupComponent } from './signup.component';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: SignupComponent }]),
    SharedModule
  ]
})
export class SignupModule { }
