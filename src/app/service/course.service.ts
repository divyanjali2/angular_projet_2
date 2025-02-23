import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  // getAll():String[] {
  //   return [('defre','hello','hello')]
  // }

  getAll(): Course[] {
    return [
     { id:1,
      name: 'Intro to Computer Science',
      description: 'This course focuses on advanced concepts in its field and includes practical projects.' },

     { id:2,
      name: 'Advanced Programming',
      description: 'Designed for final-year students, this course covers comprehensive subject material.' },

     { id:3,
      name: 'Data Structures and Algorithms',
      description: 'An intermediate course aimed at building foundational skills and knowledge.' },

     { id:4,
      name: 'Web Development Basics',
      description: 'An introductory course perfect for beginners to start learning the basics.' },

     { id:5,
      name: 'Software Engineering Principles',
      description: 'This course bridges intermediate and advanced concepts with hands-on assignments.' }
    ];
  }
}
