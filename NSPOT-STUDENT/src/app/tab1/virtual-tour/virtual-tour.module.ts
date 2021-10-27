import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtualTourPageRoutingModule } from './virtual-tour-routing.module';

import { VirtualTourPage } from './virtual-tour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirtualTourPageRoutingModule
  ],
  declarations: [VirtualTourPage]
})
export class VirtualTourPageModule {}
