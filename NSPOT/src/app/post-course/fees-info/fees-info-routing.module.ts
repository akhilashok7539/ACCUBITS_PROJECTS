import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeesInfoPage } from './fees-info.page';

const routes: Routes = [
  {
    path: '',
    component: FeesInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeesInfoPageRoutingModule {}
