import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailedviewPageRoutingModule } from './detailedview-routing.module';

import { DetailedviewPage } from './detailedview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailedviewPageRoutingModule
  ],
  declarations: [DetailedviewPage]
})
export class DetailedviewPageModule {}
