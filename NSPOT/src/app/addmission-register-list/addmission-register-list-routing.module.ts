import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmissionRegisterListPage } from './addmission-register-list.page';

const routes: Routes = [
  {
    path: '',
    component: AddmissionRegisterListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmissionRegisterListPageRoutingModule {}
