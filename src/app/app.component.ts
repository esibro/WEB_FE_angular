import { Component } from '@angular/core';
import {Course} from "./shared/course";

@Component({
  selector: 'bs-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }
  showDetails(course: Course) {
    this.course = course;
    this.listOn = false;
    this.detailsOn = true;
  }

  course: Course | undefined;
  title = 'GoStudent';
}
