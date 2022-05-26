import { Injectable } from '@angular/core';
import {Course, Timeslot, User} from "./course";

@Injectable({
  providedIn: 'root'
})
export class GoStudentService {

  courses : Course[] = [];
  constructor() {
    this.courses = [
      new Course(
        5,
        "Webentwicklung",
        "Oberstufe",
        "available",
        [new User(4,
          "Elmar",
          "Putz",
          "elmaputz@mail.com",
          "Hallo ich bin Elmar Putz.",
          "passwordelmar",
          "teacher")], [new Timeslot(3, new Date(2022,1,10)),
          new Timeslot(23, new Date(2022,5,19))],
        "Webentwicklung für Champs",
      ),
      new Course(
        9,
        "Geografie",
        "Mittelstufe",
        "available",
        [new User(9,
          "Hans",
          "Peter",
          "hanspeter@mail.com",
          "Hallo ich bin Hans Peter.",
          "passwordhans",
          "teacher")], [new Timeslot(44, new Date(2022,8,10)),
          new Timeslot(12, new Date(2022,1,19)), new Timeslot(14, new Date(2022,12,9))],
        "Geografie für Champs"
      ),
    ]
  }

  getAll() {
    return this.courses;
  }

  getSingle(subject: string) : Course {
    return <Course>this.courses.find(course => course.subject === subject);
  }

}
