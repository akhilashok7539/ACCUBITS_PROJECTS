import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewQuestionsApptitudePageRoutingModule } from './view-questions-apptitude-routing.module';

import { ViewQuestionsApptitudePage } from './view-questions-apptitude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewQuestionsApptitudePageRoutingModule
  ],
  declarations: [ViewQuestionsApptitudePage]
})
export class ViewQuestionsApptitudePageModule {}
