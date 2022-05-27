import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Course} from "../shared/course";
import {GoStudentService} from "../shared/go-student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseFactory} from "../shared/course-factory";

@Component({
  selector: 'bs-course-details',
  templateUrl: './course-details.component.html',
  styles: [
  ]
})
export class CourseDetailsComponent implements OnInit {

  course : Course = CourseFactory.empty();

  constructor(private bs: GoStudentService, private route: ActivatedRoute, private router: Router) { }

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


}
