import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionBettingLayoutComponent } from './competition-betting-layout/competition-betting-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CompetitionBettingLayoutComponent,
    children: [
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionBettingRoutingModule { }
