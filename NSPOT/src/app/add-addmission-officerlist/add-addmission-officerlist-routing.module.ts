import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAddmissionOfficerlistPage } from './add-addmission-officerlist.page';

const routes: Routes = [
  {
    path: '',
    component: AddAddmissionOfficerlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAddmissionOfficerlistPageRoutingModule {}
