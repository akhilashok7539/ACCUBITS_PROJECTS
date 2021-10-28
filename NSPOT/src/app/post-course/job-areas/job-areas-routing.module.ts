import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobAreasPage } from './job-areas.page';

const routes: Routes = [
  {
    path: '',
    component: JobAreasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobAreasPageRoutingModule {}
