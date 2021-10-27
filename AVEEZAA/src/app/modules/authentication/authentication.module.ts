import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '@app/shared/shared.module';
import { LoginWithOtpComponent } from './login-with-otp/login-with-otp.component';
import { LoginForgetPasswordComponent } from './login-forget-password/login-forget-password.component';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent, LoginWithOtpComponent, LoginForgetPasswordComponent],
  imports: [
    CommonModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
