import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentsectionDetailedPageRoutingModule } from './paymentsection-detailed-routing.module';

import { PaymentsectionDetailedPage } from './paymentsection-detailed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentsectionDetailedPageRoutingModule
  ],
  declarations: [PaymentsectionDetailedPage]
})
export class PaymentsectionDetailedPageModule {}
