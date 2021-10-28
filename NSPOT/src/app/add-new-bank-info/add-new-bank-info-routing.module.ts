import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewBankInfoPage } from './add-new-bank-info.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewBankInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewBankInfoPageRoutingModule {}
