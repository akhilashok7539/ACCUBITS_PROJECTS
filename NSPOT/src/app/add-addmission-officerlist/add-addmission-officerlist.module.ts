import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAddmissionOfficerlistPageRoutingModule } from './add-addmission-officerlist-routing.module';

import { AddAddmissionOfficerlistPage } from './add-addmission-officerlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAddmissionOfficerlistPageRoutingModule
  ],
  declarations: [AddAddmissionOfficerlistPage]
})
export class AddAddmissionOfficerlistPageModule {}
