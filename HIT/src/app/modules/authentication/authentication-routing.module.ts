import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { KycProcessComponent } from './kyc-process/kyc-process.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';




const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: RegistrationComponent
      },
      {
        path: 'verify-email/:id',
        component: VerifyEmailComponent
      },
      {
        path: 'user-details',
        component: UserDetailsComponent
      },
      {
        path: 'create-password/:id',
        component: CreatePasswordComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'update-kyc',
        component: KycProcessComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
