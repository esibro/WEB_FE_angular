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
  constructor(private bs: GoStudentService) { }

  ngOnInit(): void {
    this.bs.getAll().subscribe(res => this.courses = res);
  }

}
