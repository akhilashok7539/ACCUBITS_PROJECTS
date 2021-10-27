import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'applied-courses',
    loadChildren: () => import('./applied-courses/applied-courses.module').then( m => m.AppliedCoursesPageModule)
  },
  {
    path: 'paymentsection-detailed',
    loadChildren: () => import('./paymentsection-detailed/paymentsection-detailed.module').then( m => m.PaymentsectionDetailedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
