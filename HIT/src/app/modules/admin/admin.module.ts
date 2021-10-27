import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AdminForgetPasswordComponent } from './admin-forget-password/admin-forget-password.component';
import { AdminVerifyEmailComponent } from './admin-verify-email/admin-verify-email.component';
import { CountdownModule } from 'ngx-countdown';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AdminPasswordStrengthComponent } from './admin-password-strength/admin-password-strength.component';
import { CreateNewPasswordComponent } from './create-new-password/create-new-password.component';


@NgModule({
  declarations: [AdminComponent, AdminLoginComponent, AdminLayoutComponent, AdminForgetPasswordComponent, AdminVerifyEmailComponent, AdminChangePasswordComponent, AdminPasswordStrengthComponent, CreateNewPasswordComponent],
  imports: [
    CommonModule,
    CountdownModule,
    NgOtpInputModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    MaterialModule,
  ],
  exports:[
    AdminPasswordStrengthComponent
  ]
})
export class AdminModule { }
