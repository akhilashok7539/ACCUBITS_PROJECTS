import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyStudentApplicationsPageRoutingModule } from './verify-student-applications-routing.module';

import { VerifyStudentApplicationsPage } from './verify-student-applications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyStudentApplicationsPageRoutingModule
  ],
  declarations: [VerifyStudentApplicationsPage]
})
export class VerifyStudentApplicationsPageModule {}
