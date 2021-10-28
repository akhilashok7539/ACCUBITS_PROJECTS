import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFeesInfoPage } from './edit-fees-info.page';

const routes: Routes = [
  {
    path: '',
    component: EditFeesInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFeesInfoPageRoutingModule {}
