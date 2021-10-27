import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { ReactiveFormsModule } from '@angular/forms';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AboutComponent } from './about/about.component';
import { Timeline2Component } from './timeline2/timeline2.component';
import { FriendsComponent } from './friends/friends.component';
import { AllFriendsComponent } from './all-friends/all-friends.component';
import { FollowRequestsComponent } from './follow-requests/follow-requests.component';
import { BlockedUsersComponent } from './blocked-users/blocked-users.component';
import { PageSuggestionComponent } from './page-suggestion/page-suggestion.component';
import { CompetitionViewDetailModule } from '../competition/competition-view-detail/competition-view-detail.module';
import { SettingsComponent } from './settings/settings.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FriendsSuggestionComponent } from './friends-suggestion/friends-suggestion.component';

@NgModule({
  declarations: [FeedComponent, HomeComponent, ProfileComponent,TimelineComponent, AboutComponent, Timeline2Component, FriendsComponent, AllFriendsComponent, FollowRequestsComponent, BlockedUsersComponent, PageSuggestionComponent, SettingsComponent, FriendsSuggestionComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    MaterialModule,
    SharedModule,
    CompetitionViewDetailModule,
    Ng2TelInputModule,
  ]
})
export class FeedModule { }
