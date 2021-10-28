import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyApplicationsPageRoutingModule } from './verify-applications-routing.module';

import { VerifyApplicationsPage } from './verify-applications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyApplicationsPageRoutingModule
  ],
  declarations: [VerifyApplicationsPage]
})
export class VerifyApplicationsPageModule {}
