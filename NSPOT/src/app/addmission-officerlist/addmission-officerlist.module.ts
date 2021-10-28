import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmissionOfficerlistPageRoutingModule } from './addmission-officerlist-routing.module';

import { AddmissionOfficerlistPage } from './addmission-officerlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmissionOfficerlistPageRoutingModule
  ],
  declarations: [AddmissionOfficerlistPage]
})
export class AddmissionOfficerlistPageModule {}
