import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EligibilityRequiredPage } from './eligibility-required.page';

const routes: Routes = [
  {
    path: '',
    component: EligibilityRequiredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EligibilityRequiredPageRoutingModule {}
