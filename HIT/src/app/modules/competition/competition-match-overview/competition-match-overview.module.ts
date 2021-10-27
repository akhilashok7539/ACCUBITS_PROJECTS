import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionMatchOverviewRoutingModule } from './competition-match-overview-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { CompetitionOverviewLayoutComponent } from './competition-overview-layout/competition-overview-layout.component';
import { CompetitionMatchOverviewDetailsComponent } from './competition-match-overview-details/competition-match-overview-details.component';
import { CompetitionCurrentMatchComponent } from './competition-current-match/competition-current-match.component';
import { CompetitionMatchOverviewCardComponent } from './competition-match-overview-card/competition-match-overview-card.component';
import { CompetitionMatchPlayedCardComponent } from './competition-match-played-card/competition-match-played-card.component';
import { CompetitonMatchFooterComponent } from './competiton-match-footer/competiton-match-footer.component';
import { CompetitonMatchLineupComponent } from './competiton-match-lineup/competiton-match-lineup.component';
import { CompetitionViewDetailModule } from '../competition-view-detail/competition-view-detail.module';


@NgModule({
  declarations: [CompetitionOverviewLayoutComponent, CompetitionMatchOverviewDetailsComponent, CompetitionCurrentMatchComponent, CompetitionMatchOverviewCardComponent, CompetitionMatchPlayedCardComponent, CompetitonMatchFooterComponent, CompetitonMatchLineupComponent],
  imports: [
    CommonModule,
    CoreModule,
    CompetitionMatchOverviewRoutingModule,
    CompetitionViewDetailModule,
  ]
})
export class CompetitionMatchOverviewModule { }