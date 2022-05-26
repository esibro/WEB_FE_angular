import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Course} from "../shared/course";
import {GoStudentService} from "../shared/go-student.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'bs-course-details',
  templateUrl: './course-details.component.html',
  styles: [
  ]
})
export class CourseDetailsComponent implements OnInit {

  @Input() course : Course | undefined;
  @Output() showListEvent= new EventEmitter<any>();
  constructor(private bs: GoStudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.course = this.bs.getSingle(params['subject']);
  }
  showCourseList() {
    this.showListEvent.emit();
  }

}
