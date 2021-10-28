import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EligibilityRequiredPageRoutingModule } from './eligibility-required-routing.module';

import { EligibilityRequiredPage } from './eligibility-required.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EligibilityRequiredPageRoutingModule
  ],
  declarations: [EligibilityRequiredPage]
})
export class EligibilityRequiredPageModule {}
