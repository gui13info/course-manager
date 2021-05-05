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
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.courseService.retrieveById(id).subscribe({
      next: course => this.course = course,
      error: err => console.log("Error", err)
    });
  }


  save(): void {
    this.courseService.save(this.course).subscribe({
      next: course => {
        console.log('Saved with success', course)
        this.router.navigate(['/courses'])
      },
      error: err => console.log("Error", err)
      
    });
  }

  back(): void{
    this.router.navigate(['/courses'])
  }

}
