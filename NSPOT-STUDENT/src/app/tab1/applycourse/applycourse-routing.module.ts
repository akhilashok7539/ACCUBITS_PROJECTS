import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplycoursePage } from './applycourse.page';

const routes: Routes = [
  {
    path: '',
    component: ApplycoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplycoursePageRoutingModule {}
