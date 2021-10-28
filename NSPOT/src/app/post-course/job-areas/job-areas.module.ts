import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobAreasPageRoutingModule } from './job-areas-routing.module';

import { JobAreasPage } from './job-areas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobAreasPageRoutingModule
  ],
  declarations: [JobAreasPage]
})
export class JobAreasPageModule {}
