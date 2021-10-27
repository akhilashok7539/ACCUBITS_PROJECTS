import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionLandingLayoutComponent } from './competition-landing-layout/competition-landing-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CompetitionLandingLayoutComponent,
    children: [
      // {
      //   path: 'details',
      //   component: CompetitionLayoutComponent
      // },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionLandingRoutingModule { }
