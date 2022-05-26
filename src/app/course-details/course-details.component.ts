import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Course} from "../shared/course";

@Component({
  selector: 'bs-course-details',
  templateUrl: './course-details.component.html',
  styles: [
  ]
})
export class CourseDetailsComponent implements OnInit {

  @Input() course : Course | undefined;
  @Output() showListEvent= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  showCourseList() {
    this.showListEvent.emit();
  }

}
