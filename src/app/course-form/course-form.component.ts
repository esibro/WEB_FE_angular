import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {GoStudentService} from "../shared/go-student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseFactory} from "../shared/course-factory";

@Component({
  selector: 'bs-course-form',
  templateUrl: './course-form.component.html',
  styles: [
  ]
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup | undefined;
  course = CourseFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingBook = false;
  timeslots: FormArray | undefined;

  constructor(
    private fb: FormBuilder,
    private bs: GoStudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.courseForm = this.fb.group({});
    this.timeslots = this.fb.array([]);
  }

  ngOnInit(): void {
  }

  submitForm(){

  }

}
