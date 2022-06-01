import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Course} from "../shared/course";
import {GoStudentService} from "../shared/go-student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseFactory} from "../shared/course-factory";
import {AuthenticationService} from "../shared/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'bs-course-details',
  templateUrl: './course-details.component.html',
  styles: [
  ]
})
export class CourseDetailsComponent implements OnInit {

  course = CourseFactory.empty();
  errors: { [key: string]: string } = {};


  constructor(
    private bs: GoStudentService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService,
  ) {

  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.bs.getSingle(params['subject']).subscribe(c => this.course = c);
  }

  removeBook() {
    if (confirm('Kurs wirklich löschen?')) {
      this.bs.remove(this.course.subject)
        .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
      console.log("Course deleted");
    }
  }

  submit(){
      this.course.state = "pending";
      this.course.student_id = this.authService.getCurrentUserId();
      this.bs.update(this.course).subscribe(
        res => {this.router.navigate(['../'],
            {relativeTo: this.route});
        }
      );
      console.log('Kurs gebucht');
  }

  acccept(){
    this.course.state = "booked";
    this.course.student_id = this.authService.getCurrentUserId();
    this.bs.update(this.course).subscribe(
      res => {this.router.navigate(['../'],
        {relativeTo: this.route});
      }
    );
    console.log('Request accepted');
  }

  reject(){
    this.course.state = "available";
    this.course.student_id = 0;
    this.course.student_id = this.authService.getCurrentUserId();
    this.bs.update(this.course).subscribe(
      res => {this.router.navigate(['../'],
        {relativeTo: this.route});
      }
    );
    console.log('Request rejected');
  }
}
