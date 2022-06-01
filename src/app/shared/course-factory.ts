import {Course, Timeslot, User} from "./course";

export class CourseFactory {
  static empty(): Course {
    return new Course(0, '', '', '', 0, 0,
      [new User(0, '', '', '', '', '', true)],
      [new Timeslot(0, new Date())], '');
  }

  static fromObject(rawCourse: any): Course{
    return new Course(
      rawCourse.id,
      rawCourse.subject,
      rawCourse.level,
      rawCourse.state,
      rawCourse.user_id,
      rawCourse.student_id,
      rawCourse.users,
      rawCourse.timeslots,
      //typeof(rawCourse.timeslots) === 'string'?
        //new Date(rawCourse.timeslots) : rawCourse.timeslots,
      rawCourse.description,
    )
  }
}
