import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostCoursePageRoutingModule } from './post-course-routing.module';

import { PostCoursePage } from './post-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostCoursePageRoutingModule
  ],
  declarations: [PostCoursePage]
})
export class PostCoursePageModule {}
