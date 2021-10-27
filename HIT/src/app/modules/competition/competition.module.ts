import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { CompetitionRoutingModule } from './competition-routing.module';
import { CompetitionComponent } from './competition.component';
import { CoreModule } from 'src/app/core/core.module';
import { CountdownModule } from 'ngx-countdown';
import { ShareButtonsPopupModule } from 'ngx-sharebuttons/popup';
@NgModule({
  declarations: [CompetitionComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ShareButtonsPopupModule,
    CompetitionRoutingModule,
    CountdownModule
  ],
})
export class CompetitionModule { }

