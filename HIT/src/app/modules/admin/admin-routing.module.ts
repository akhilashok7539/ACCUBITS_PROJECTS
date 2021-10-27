import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { AdminForgetPasswordComponent } from './admin-forget-password/admin-forget-password.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminVerifyEmailComponent } from './admin-verify-email/admin-verify-email.component';
import { AdminComponent } from './admin.component';
import { CreateNewPasswordComponent } from './create-new-password/create-new-password.component';



const routes: Routes = [
  { path: '', component: AdminLoginComponent },
  
  {
    path: 'forgot-password',
    component: AdminForgetPasswordComponent
  },
  {
    path: 'verify-email/:id',
    component: AdminVerifyEmailComponent
  },
  {
    path: 'create-password/:id',
    component: AdminChangePasswordComponent
  },
  {
    path: 'create-new-password',
    component: CreateNewPasswordComponent
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'layout',
        loadChildren: () => import('./admin-layout/admin-layout.module').then((m) => m.AdminLayoutModule)
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
