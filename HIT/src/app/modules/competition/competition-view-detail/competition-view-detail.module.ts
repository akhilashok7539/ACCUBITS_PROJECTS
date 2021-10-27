import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionViewDetailRoutingModule } from './competition-view-detail-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { CompetitionViewDetailComponent } from './competition-view-detail.component';
import { CompetitionActivePlayersComponent } from './competition-active-players/competition-active-players.component';
import { CompetitionClubCardComponent } from './competition-club-card/competition-club-card.component';
import { CompetitionClubViewComponent } from './competition-club-view/competition-club-view.component';
import { CompetitionFooterComponent } from './competition-footer/competition-footer.component';
import { CompetitionLayoutComponent } from './competition-layout/competition-layout.component';
import { CompetitionMatchesViewComponent } from './competition-matches-view/competition-matches-view.component';
import { CompetitionLeaderboardComponent } from './competition-leaderboard/competition-leaderboard.component'
import { CompetitionResultComponent } from './competition-result/competition-result.component'
import { CompetitionOverviewComponent } from './competition-overview/competition-overview.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoreModule } from 'src/app/core/core.module';
import { CountdownModule } from 'ngx-countdown';
import { CompetitionBettingPopupComponent } from './competition-betting-popup/competition-betting-popup.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [CompetitionViewDetailComponent,CompetitionResultComponent,CompetitionLeaderboardComponent,CompetitionLayoutComponent, CompetitionOverviewComponent, CompetitionClubCardComponent, CompetitionActivePlayersComponent, CompetitionClubViewComponent, CompetitionMatchesViewComponent, CompetitionFooterComponent, CompetitionBettingPopupComponent,],
  imports: [
    CommonModule,
    CoreModule,
    CompetitionViewDetailRoutingModule,
    SlickCarouselModule,
    NgxPaginationModule,
    CountdownModule,
    SharedModule,
    MaterialModule,
  ],
  exports:[CompetitionBettingPopupComponent]
})
export class CompetitionViewDetailModule { }
