import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditApptituetestPage } from './edit-apptituetest.page';

const routes: Routes = [
  {
    path: '',
    component: EditApptituetestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditApptituetestPageRoutingModule {}
