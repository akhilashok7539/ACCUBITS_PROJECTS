import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamLayoutComponent } from './team-layout/team-layout.component';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { TeamFixturesComponent } from './team-fixtures/team-fixtures.component';
import { TeamSquadComponent } from './team-squad/team-squad.component';
import { TeamComponent } from '../team/team.component'
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [TeamComponent ,TeamLayoutComponent, TeamOverviewComponent, TeamStatsComponent, TeamFixturesComponent, TeamSquadComponent],
  imports: [
    CommonModule,
    CoreModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
