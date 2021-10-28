import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirtualtourPage } from './virtualtour.page';

const routes: Routes = [
  {
    path: '',
    component: VirtualtourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualtourPageRoutingModule {}
