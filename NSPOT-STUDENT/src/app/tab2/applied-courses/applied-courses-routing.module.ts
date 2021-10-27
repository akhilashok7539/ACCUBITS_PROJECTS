import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppliedCoursesPage } from './applied-courses.page';

const routes: Routes = [
  {
    path: '',
    component: AppliedCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppliedCoursesPageRoutingModule {}
