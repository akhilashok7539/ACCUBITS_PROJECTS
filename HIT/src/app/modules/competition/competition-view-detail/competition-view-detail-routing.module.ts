import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionLayoutComponent } from './competition-layout/competition-layout.component';
import { CompetitionViewDetailComponent } from './competition-view-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CompetitionLayoutComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionViewDetailRoutingModule { }
