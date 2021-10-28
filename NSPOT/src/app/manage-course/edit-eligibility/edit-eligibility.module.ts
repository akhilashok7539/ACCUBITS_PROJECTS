import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEligibilityPageRoutingModule } from './edit-eligibility-routing.module';

import { EditEligibilityPage } from './edit-eligibility.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEligibilityPageRoutingModule
  ],
  declarations: [EditEligibilityPage]
})
export class EditEligibilityPageModule {}
