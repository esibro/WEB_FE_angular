import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {Course, Timeslot, User} from "./course";
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoStudentService {
  private api = 'http://gostudent.s1910456012.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Course>> {
    return this.http.get(`${this.api}/courses`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getSingle(subject: string): Observable<Course> {
    return this.http.get<Course>(`${this.api}/course/${subject}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  remove(subject: string): Observable<any> {
    return this.http.delete(`${this.api}/course/${subject}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any) : Observable<any> {
    return throwError(() => new Error(error));
  }

}
