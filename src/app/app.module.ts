import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import {GoStudentService} from "./shared/go-student.service";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseListItemComponent,
    CourseDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [GoStudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
