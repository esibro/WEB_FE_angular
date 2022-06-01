import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import {GoStudentService} from "./shared/go-student.service";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CourseFormComponent } from './course-form/course-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from "./shared/authentication.service";
import {TokenInterceptorService} from "./shared/token-interceptor.service";
import {ToastrModule} from "ngx-toastr";
import {JwtInterceptorService} from "./shared/jwt-interceptor.service";
import { UserCourseListComponent } from './user-course-list/user-course-list.component';
import { StudentCourseListComponent } from './student-course-list/student-course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseListItemComponent,
    CourseDetailsComponent,
    HomeComponent,
    CourseFormComponent,
    LoginComponent,
    UserCourseListComponent,
    StudentCourseListComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, ToastrModule.forRoot()
  ],
  providers: [GoStudentService, AuthenticationService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})

export class AppModule { }
