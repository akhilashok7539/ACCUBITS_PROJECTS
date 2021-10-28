import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEligibilityPage } from './edit-eligibility.page';

const routes: Routes = [
  {
    path: '',
    component: EditEligibilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEligibilityPageRoutingModule {}
