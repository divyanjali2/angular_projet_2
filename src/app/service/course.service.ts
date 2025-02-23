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
      name: 'NAVODYA',
      description: 'Year 4', },

     { id:2,
      name: 'DIVYANJALI',
      description: 'Year 4', },
    ];
  }
}
