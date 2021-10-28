import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmissionRegisterListPageRoutingModule } from './addmission-register-list-routing.module';

import { AddmissionRegisterListPage } from './addmission-register-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmissionRegisterListPageRoutingModule
  ],
  declarations: [AddmissionRegisterListPage]
})
export class AddmissionRegisterListPageModule {}
