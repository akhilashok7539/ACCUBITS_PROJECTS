import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessmodelPage } from './successmodel.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessmodelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessmodelPageRoutingModule {}
