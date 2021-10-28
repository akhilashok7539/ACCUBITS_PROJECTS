import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomizeApplicationsPageRoutingModule } from './customize-applications-routing.module';

import { CustomizeApplicationsPage } from './customize-applications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CustomizeApplicationsPageRoutingModule
  ],
  declarations: [CustomizeApplicationsPage]
})
export class CustomizeApplicationsPageModule {}
