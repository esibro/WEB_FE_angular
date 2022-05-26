import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Course, Timeslot, User} from "../shared/course";
import {DatePipe} from "@angular/common";
import {GoStudentService} from "../shared/go-student.service";

@Component({
  selector: 'bs-course-list',
  templateUrl: './course-list.component.html',
  styles: [
  ]
})
export class CourseListComponent implements OnInit {

  courses : Course[] = [];
  @Output() showDetailsEvent = new EventEmitter<Course>();
  constructor(private bs: GoStudentService) { }

  ngOnInit(): void {
    this.courses = this.bs.getAll();
  }

  showDetails(course: Course) {
    this.showDetailsEvent.emit(course);
  }

}
