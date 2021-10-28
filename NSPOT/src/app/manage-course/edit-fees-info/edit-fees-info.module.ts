import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFeesInfoPageRoutingModule } from './edit-fees-info-routing.module';

import { EditFeesInfoPage } from './edit-fees-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFeesInfoPageRoutingModule
  ],
  declarations: [EditFeesInfoPage]
})
export class EditFeesInfoPageModule {}
