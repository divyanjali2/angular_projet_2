import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { CourseService } from '../service/course.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
  course: Course | undefined;
  constructor (private route:ActivatedRoute, private courseService:CourseService) {}

  ngOnInit(): void {
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    this.course = this.courseService.getCourseDetails(courseId);
  }
}
