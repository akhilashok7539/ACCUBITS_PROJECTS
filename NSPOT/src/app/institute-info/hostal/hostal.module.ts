import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HostalPageRoutingModule } from './hostal-routing.module';

import { HostalPage } from './hostal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HostalPageRoutingModule
  ],
  declarations: [HostalPage]
})
export class HostalPageModule {}
