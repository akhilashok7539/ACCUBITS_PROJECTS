import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageCoursePage } from './manage-course.page';

const routes: Routes = [
  {
    path: '',
    component: ManageCoursePage
  },  {
    path: 'edit-course',
    loadChildren: () => import('./edit-course/edit-course.module').then( m => m.EditCoursePageModule)
  },
  {
    path: 'edit-fees-info',
    loadChildren: () => import('./edit-fees-info/edit-fees-info.module').then( m => m.EditFeesInfoPageModule)
  },
  {
    path: 'edit-eligibility',
    loadChildren: () => import('./edit-eligibility/edit-eligibility.module').then( m => m.EditEligibilityPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageCoursePageRoutingModule {}
