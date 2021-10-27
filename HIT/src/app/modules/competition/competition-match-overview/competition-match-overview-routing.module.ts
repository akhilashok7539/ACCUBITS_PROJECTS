import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionOverviewLayoutComponent } from './competition-overview-layout/competition-overview-layout.component';

const routes: Routes = [
  {
    path: 'match/:id',
    component: CompetitionOverviewLayoutComponent,
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
export class CompetitionMatchOverviewRoutingModule { }
