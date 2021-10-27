import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailedviewPage } from './detailedview.page';

const routes: Routes = [
  {
    path: '',
    component: DetailedviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailedviewPageRoutingModule {}
