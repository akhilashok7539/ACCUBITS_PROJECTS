import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessmodelPageRoutingModule } from './successmodel-routing.module';

import { SuccessmodelPage } from './successmodel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessmodelPageRoutingModule
  ],
  declarations: [SuccessmodelPage]
})
export class SuccessmodelPageModule {}
