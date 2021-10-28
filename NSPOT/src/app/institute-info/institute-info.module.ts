import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteInfoPageRoutingModule } from './institute-info-routing.module';

import { InstituteInfoPage } from './institute-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteInfoPageRoutingModule
  ],
  declarations: [InstituteInfoPage]
})
export class InstituteInfoPageModule {}
