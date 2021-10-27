import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionLandingRoutingModule } from './competition-landing-routing.module';
import { CompetitionLandingLayoutComponent } from './competition-landing-layout/competition-landing-layout.component';
import { CompetitionLandingHistoryComponent } from './competition-landing-history/competition-landing-history.component';
import { CoreModule } from 'src/app/core/core.module';
import { CountdownModule } from 'ngx-countdown';
import { CompetitionLandingAllCompetitionComponent } from './competition-landing-all-competition/competition-landing-all-competition.component';
import { CompetitionLandingMyCompetitionComponent } from './competition-landing-my-competition/competition-landing-my-competition.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CompetitionDetailsRowComponent } from './competition-details-row/competition-details-row.component';
import { CompetitionPlayersPopComponent } from './competition-players-pop/competition-players-pop.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompetitionJoinViewComponent } from './competition-join-view/competition-join-view.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [CompetitionLandingLayoutComponent, CompetitionLandingHistoryComponent, CompetitionLandingAllCompetitionComponent, CompetitionLandingMyCompetitionComponent, CompetitionDetailsRowComponent, CompetitionPlayersPopComponent, CompetitionJoinViewComponent],
  imports: [
    CommonModule,
    CompetitionLandingRoutingModule,
    CoreModule,
    SharedModule,
    SlickCarouselModule,
    CountdownModule,
    NgxPaginationModule
  ]
})
export class CompetitionLandingModule { }
