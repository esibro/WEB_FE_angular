import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GoStudentService} from "../shared/go-student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseFactory} from "../shared/course-factory";
import {CourseFormErrorMessages} from "./course-form-error-messages";
import {Course, User} from "../shared/course";
import {AuthenticationService} from "../shared/authentication.service";




@Component({
  selector: 'bs-course-form',
  templateUrl: './course-form.component.html',
  styles: [
  ]
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup;
  course = CourseFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingCourse = false;
  timeslots: FormArray;
  //users: { [key: number] : any}

  constructor(
    private fb: FormBuilder,
    private bs: GoStudentService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService
  ) {
    this.courseForm = this.fb.group({});
    this.timeslots = this.fb.array([]);

  }

  ngOnInit(): void {
    const subject = this.route.snapshot.params['subject'];
    if (subject) {
      this.isUpdatingCourse = true;
      this.bs.getSingle(subject).subscribe(course => {
        this.course = course;
        this.initCourse();
      });
    }
    this.initCourse();
  }

  initCourse(){
    this.buildTimeslotsArray();
    this.courseForm = this.fb.group({
      id: this.course.id,
      subject: [
        this.course.subject, [
          Validators.required,
          Validators.maxLength(25),
        ]],
      description: this.course.description,
      level: [
        this.course.level, [
          Validators.required,
        ]],
      timeslots: this.timeslots,
      //users: this.course.users

    });
    this.courseForm.statusChanges.subscribe(() =>
    this.updateErrorMessages()
    )
  }

  addTimeslotControl(){
    this.timeslots.push(this.fb.group({date: null}));
  }

  buildTimeslotsArray(){
    if (this.course.timeslots) {
      this.timeslots = this.fb.array([]);
      for (let slot of this.course.timeslots) {
        let fg = this.fb.group({
          date: new FormControl(slot.date, [Validators.required])
        })
        this.timeslots.push(fg);
      }
    }
  }

  updateErrorMessages(){
    console.log("Is invalid?" + this.courseForm.invalid);
    this.errors = {};
    for (const message of CourseFormErrorMessages) {
      const control = this.courseForm.get(message.forControl);

      if (control &&
        control.dirty &&
        control.invalid &&
        control.errors &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

  submitForm(){
    this.courseForm.value.timeslots = this.courseForm.value.timeslots.filter(
      (timeslot: {date: string; }) => timeslot.date
    );

    const course: Course = CourseFactory.fromObject(this.courseForm.value);
    if (this.isUpdatingCourse) {
      this.bs.update(course).subscribe(res => {
        this.router.navigate(['../../courses', course.subject], {
          relativeTo: this.route
        });
      });
    } else {
      course.state = "available";
      course.user_id = this.authService.getCurrentUserId();
      this.bs.create(course).subscribe(res=>{
        this.course = CourseFactory.empty();
        this.courseForm.reset(CourseFactory.empty());
        this.router.navigate(['../courses'], {relativeTo: this.route})
      })
    }

  }

}
