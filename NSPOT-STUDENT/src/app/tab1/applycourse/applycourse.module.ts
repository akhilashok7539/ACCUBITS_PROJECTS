import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplycoursePageRoutingModule } from './applycourse-routing.module';

import { ApplycoursePage } from './applycourse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplycoursePageRoutingModule
  ],
  declarations: [ApplycoursePage]
})
export class ApplycoursePageModule {}
