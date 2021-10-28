import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageCoursePageRoutingModule } from './manage-course-routing.module';

import { ManageCoursePage } from './manage-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageCoursePageRoutingModule
  ],
  declarations: [ManageCoursePage]
})
export class ManageCoursePageModule {}
