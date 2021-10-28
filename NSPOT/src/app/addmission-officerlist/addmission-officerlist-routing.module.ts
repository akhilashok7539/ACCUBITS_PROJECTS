import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmissionOfficerlistPage } from './addmission-officerlist.page';

const routes: Routes = [
  {
    path: '',
    component: AddmissionOfficerlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmissionOfficerlistPageRoutingModule {}
