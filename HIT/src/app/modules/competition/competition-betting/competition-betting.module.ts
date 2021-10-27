import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompetitionBettingRoutingModule } from './competition-betting-routing.module';
import { CompetitionBettingComponent } from './competition-betting.component';
import { CompetitionBettingLayoutComponent } from './competition-betting-layout/competition-betting-layout.component';
import { CoreModule } from 'src/app/core/core.module';
import { CompetitionBettingOverviewComponent } from './competition-betting-overview/competition-betting-overview.component';
import { CompetitionBettingOverviewViewComponent } from './competition-betting-overview-view/competition-betting-overview-view.component';
import { CompetitionBettingClubViewComponent } from './competition-betting-club-view/competition-betting-club-view.component';
import { CompetitionBettingLeaderboardViewComponent } from './competition-betting-leaderboard-view/competition-betting-leaderboard-view.component';
import { CompetitionBettingResultViewComponent } from './competition-betting-result-view/competition-betting-result-view.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountdownModule } from 'ngx-countdown';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BettingPopupComponent } from './betting-popup/betting-popup.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CompetitionBettingComponent, CompetitionBettingLayoutComponent, CompetitionBettingOverviewComponent, CompetitionBettingOverviewViewComponent, CompetitionBettingClubViewComponent, CompetitionBettingLeaderboardViewComponent, CompetitionBettingResultViewComponent, BettingPopupComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    CountdownModule,
    MaterialModule,
    FormsModule,
    CompetitionBettingRoutingModule,
    SlickCarouselModule,
    NgxPaginationModule,
  ],
  exports:[CompetitionBettingLeaderboardViewComponent,CompetitionBettingResultViewComponent]
})
export class CompetitionBettingModule { }