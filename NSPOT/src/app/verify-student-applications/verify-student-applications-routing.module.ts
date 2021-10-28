import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyStudentApplicationsPage } from './verify-student-applications.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyStudentApplicationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyStudentApplicationsPageRoutingModule {}
