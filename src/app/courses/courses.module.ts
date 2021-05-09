import { StarComponent } from './../shared/star/star.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { ReplacePipe } from '../pipe/replace.pipe';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ])
  ]
})
export class CoursesModule { }
