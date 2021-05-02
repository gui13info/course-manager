import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from './../course-list/course';
import { CourseService } from './../course.service';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  course: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
    ) { }

  ngOnInit() {
    this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
  }


  save(): void {
    this.courseService.save(this.course);
    this.router.navigate(['/courses'])
  }

  back(): void{
    this.router.navigate(['/courses'])
  }

}
