import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsClubsComponent } from './teams-clubs.component';
import { TeamsClubsViewComponent } from './teams-clubs-view/teams-clubs-view.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsClubsComponent,
    children: [
      {
        path: '',
        component: TeamsClubsViewComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsClubsRoutingModule { }
