import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { KycProcessComponent } from './kyc-process/kyc-process.component';
import { ParallaxItemDirective } from '../../directives/parallax-item.directive';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { CountdownModule } from 'ngx-countdown';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { from } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { TermsOfUsePopComponent } from './terms-of-use-pop/terms-of-use-pop.component';
import { PrivacyPopComponent } from './privacy-pop/privacy-pop.component';


@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, ParallaxItemDirective,
  RegistrationComponent, VerifyEmailComponent, CreatePasswordComponent, PasswordStrengthComponent, ForgotPasswordComponent, KycProcessComponent, UserDetailsComponent, TermsOfUsePopComponent, PrivacyPopComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    NgOtpInputModule, 
    Ng2TelInputModule,
    SharedModule,
    CoreModule,
    CountdownModule,
    MaterialModule,
    FormsModule, 
  ]
})
export class AuthenticationModule { }
