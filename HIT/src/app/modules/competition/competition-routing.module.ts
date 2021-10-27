import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionComponent } from './competition.component';

const routes: Routes = [
  {
    path: '',
    component: CompetitionComponent,
    children: [
      {
        path: 'details/:id',
        loadChildren: () => import('./competition-view-detail/competition-view-detail.module').then((m) => m.CompetitionViewDetailModule)
      },
      {
        path: 'overview',
        loadChildren: () => import('./competition-match-overview/competition-match-overview.module').then((m) => m.CompetitionMatchOverviewModule)
      },
      {
        path: 'landing',
        loadChildren: () => import('./competition-landing/competition-landing.module').then((m) => m.CompetitionLandingModule)
      },
      {
        path: 'betting/:id',
        loadChildren: () => import('./competition-betting/competition-betting.module').then((m) => m.CompetitionBettingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionRoutingModule { }
