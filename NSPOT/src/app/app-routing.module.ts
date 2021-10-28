import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'verify-applications',
    loadChildren: () => import('./verify-applications/verify-applications.module').then( m => m.VerifyApplicationsPageModule)
  },
  {
    path: 'post-course',
    loadChildren: () => import('./post-course/post-course.module').then( m => m.PostCoursePageModule)
  },
  {
    path: 'manage-course',
    loadChildren: () => import('./manage-course/manage-course.module').then( m => m.ManageCoursePageModule)
  },
  {
    path: 'addmission-officerlist',
    loadChildren: () => import('./addmission-officerlist/addmission-officerlist.module').then( m => m.AddmissionOfficerlistPageModule)
  },
  {
    path: 'add-addmission-officerlist',
    loadChildren: () => import('./add-addmission-officerlist/add-addmission-officerlist.module').then( m => m.AddAddmissionOfficerlistPageModule)
  },
  {
    path: 'customize-applications',
    loadChildren: () => import('./customize-applications/customize-applications.module').then( m => m.CustomizeApplicationsPageModule)
  },
  {
    path: 'addmission-register-list',
    loadChildren: () => import('./addmission-register-list/addmission-register-list.module').then( m => m.AddmissionRegisterListPageModule)
  },
  {
    path: 'verify-student-applications',
    loadChildren: () => import('./verify-student-applications/verify-student-applications.module').then( m => m.VerifyStudentApplicationsPageModule)
  },
  {
    path: 'bank-info',
    loadChildren: () => import('./bank-info/bank-info.module').then( m => m.BankInfoPageModule)
  },
  {
    path: 'add-new-bank-info',
    loadChildren: () => import('./add-new-bank-info/add-new-bank-info.module').then( m => m.AddNewBankInfoPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'apptitude-test',
    loadChildren: () => import('./apptitude-test/apptitude-test.module').then( m => m.ApptitudeTestPageModule)
  },  {
    path: 'institute-info',
    loadChildren: () => import('./institute-info/institute-info.module').then( m => m.InstituteInfoPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
