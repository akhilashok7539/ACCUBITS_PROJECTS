import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostCoursePage } from './post-course.page';

const routes: Routes = [
  {
    path: '',
    component: PostCoursePage
  },
  {
    path: 'fees-info',
    loadChildren: () => import('./fees-info/fees-info.module').then( m => m.FeesInfoPageModule)
  },
  {
    path: 'eligibility-required',
    loadChildren: () => import('./eligibility-required/eligibility-required.module').then( m => m.EligibilityRequiredPageModule)
  },
  {
    path: 'job-areas',
    loadChildren: () => import('./job-areas/job-areas.module').then( m => m.JobAreasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostCoursePageRoutingModule {}
