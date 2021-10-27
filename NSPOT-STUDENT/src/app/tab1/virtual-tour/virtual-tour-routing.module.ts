import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirtualTourPage } from './virtual-tour.page';

const routes: Routes = [
  {
    path: '',
    component: VirtualTourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualTourPageRoutingModule {}
