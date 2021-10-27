import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsClubsRoutingModule } from './teams-clubs-routing.module';
import { TeamsClubsViewComponent } from './teams-clubs-view/teams-clubs-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { TeamsClubsComponent } from './teams-clubs.component';


@NgModule({
  declarations: [TeamsClubsComponent,TeamsClubsViewComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    TeamsClubsRoutingModule,
  ]
})
export class TeamsClubsModule { }




