import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis et tortor sit amet porta. Sed fermentum ornare elit vel facilisis. Maecenas sem elit, fermentum congue mauris eget, pharetra sollicitudin mi. Suspendisse metus dui, rutrum sit amet egestas quis, convallis eu enim. Sed a convallis lacus, ut tincidunt justo. Nunc felis lorem, laoreet nec nulla elementum, facilisis congue tortor. Duis laoreet libero nec ultrices lacinia. Integer dapibus elementum ipsum eget convallis. Nunc sem quam, vestibulum ac venenatis ornare, bibendum nec mauris. Praesent sem turpis, lacinia et pretium non, pretium vitae justo. Fusce condimentum sapien et enim dapibus lacinia. Morbi elementum, turpis vulputate consectetur consectetur, urna tortor dapibus sapien, non tempus mi sapien a neque.';
}
