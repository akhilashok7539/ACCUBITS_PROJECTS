import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApptitudeTestPageRoutingModule } from './apptitude-test-routing.module';

import { ApptitudeTestPage } from './apptitude-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApptitudeTestPageRoutingModule
  ],
  declarations: [ApptitudeTestPage]
})
export class ApptitudeTestPageModule {}
