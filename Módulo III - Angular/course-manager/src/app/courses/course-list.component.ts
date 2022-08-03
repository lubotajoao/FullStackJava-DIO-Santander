import { Component, OnInit } from "@angular/core";
import { Course } from './course'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '/assets/images/forms.png',
        price: 102.99,
        code: "XPS-3903",
        duration: 120,
        rating: 4.5,
        releaseDate: 'November, 2, 2022'
      },
      {
        id: 2,
        name: "Angular: HTTP",
        imageUrl: "/assets/images/http.png",
        price: 46.99,
        code: "XLS-3903",
        duration: 80,
        rating: 4.2,
        releaseDate: 'December, 4, 2022'
      }
    ]
  }
}
