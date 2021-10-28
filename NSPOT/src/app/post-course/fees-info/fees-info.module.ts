import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeesInfoPageRoutingModule } from './fees-info-routing.module';

import { FeesInfoPage } from './fees-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeesInfoPageRoutingModule
  ],
  declarations: [FeesInfoPage]
})
export class FeesInfoPageModule {}
