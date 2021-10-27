import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppliedCoursesPageRoutingModule } from './applied-courses-routing.module';

import { AppliedCoursesPage } from './applied-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppliedCoursesPageRoutingModule
  ],
  declarations: [AppliedCoursesPage]
})
export class AppliedCoursesPageModule {}
