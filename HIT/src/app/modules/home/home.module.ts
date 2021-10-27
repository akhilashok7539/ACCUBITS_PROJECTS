import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyDatePickerModule } from 'mydatepicker';
import { MaterialModule } from '../../shared/material/material.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CompetitionGamesComponent } from './competition-games/competition-games.component';

// import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { CompetitionCardsComponent } from './competition-cards/competition-cards.component';
import { CreateCompetitionComponent } from './create-competition/create-competition.component';
import { ChooseGameComponent } from './choose-game/choose-game.component';
import { ChooseCompetitionComponent } from './choose-competition/choose-competition.component';
import { EntryFeeComponent } from './entry-fee/entry-fee.component';
import { ReviewCompetitionComponent } from './review-competition/review-competition.component';
import { CancelPopupComponent } from './cancel-popup/cancel-popup.component';
import { ChooseChampionshipComponent } from './choose-championship/choose-championship.component';
import { InvitedFriendsComponent } from './invited-friends/invited-friends.component';
import { ReviewPopupComponent } from './review-popup/review-popup.component';
import { SlickCarouselModule } from 'ngx-slick-carousel'; 
import { CountdownModule } from 'ngx-countdown';
import {AutoSizeInputModule} from 'ngx-autosize-input';
import { InviteFriendsPopComponent } from './invite-friends-pop/invite-friends-pop.component';
 import { ShareButtonModule } from 'ngx-sharebuttons/button';
import { CompetitionViewDetailModule } from '../competition/competition-view-detail/competition-view-detail.module';
@NgModule({
  declarations: [HomeComponent, CompetitionGamesComponent, CompetitionCardsComponent, CreateCompetitionComponent, ChooseGameComponent, ChooseCompetitionComponent, EntryFeeComponent, ReviewCompetitionComponent, CancelPopupComponent, ChooseChampionshipComponent, InvitedFriendsComponent, ReviewPopupComponent, InviteFriendsPopComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule,
    NgxPaginationModule,
    MyDatePickerModule,
    SlickCarouselModule,
    CountdownModule,
    ShareButtonModule,
    MaterialModule,
    CompetitionViewDetailModule,
    AutoSizeInputModule
  ],

})
export class HomeModule { }
