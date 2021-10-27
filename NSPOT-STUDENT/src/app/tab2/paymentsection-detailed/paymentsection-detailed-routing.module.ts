import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsectionDetailedPage } from './paymentsection-detailed.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentsectionDetailedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsectionDetailedPageRoutingModule {}
