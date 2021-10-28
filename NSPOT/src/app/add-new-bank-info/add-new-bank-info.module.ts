import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewBankInfoPageRoutingModule } from './add-new-bank-info-routing.module';

import { AddNewBankInfoPage } from './add-new-bank-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewBankInfoPageRoutingModule
  ],
  declarations: [AddNewBankInfoPage]
})
export class AddNewBankInfoPageModule {}
