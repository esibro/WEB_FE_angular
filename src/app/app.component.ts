import { Component } from '@angular/core';
import {Course} from "./shared/course";

@Component({
  selector: 'bs-root',
  template: `<bs-course-list (showDetailsEvent)="showDetails($event)" *ngIf="listOn"></bs-course-list>
  <bs-course-details (showListEvent)="showList()" *ngIf="detailsOn" [course]="course"></bs-course-details>`,
  styles: []
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
}
