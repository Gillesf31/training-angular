import { Component } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  categories = [
    {id: 1, name: 'Web Development'},
    {id: 2, name: 'Design'},
  ]
  submit(f) {
    console.log(f);
  }

  log(x) {
    console.log(x);
  }
}
