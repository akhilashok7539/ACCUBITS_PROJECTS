import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostalPage } from './hostal.page';

const routes: Routes = [
  {
    path: '',
    component: HostalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostalPageRoutingModule {}
