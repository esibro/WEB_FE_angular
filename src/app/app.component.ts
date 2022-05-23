import { Component } from '@angular/core';
import {Course} from "./shared/course";

@Component({
  selector: 'bs-root',
  template: `<bs-course-list *ngIf="listOn"></bs-course-list>
  <bs-course-details *ngIf="detailsOn" [course]="course"></bs-course-details>`,
  styles: []
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  course: Course | undefined;
}
