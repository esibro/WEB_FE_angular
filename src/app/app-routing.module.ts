import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CourseListComponent} from "./course-list/course-list.component";
import {CourseDetailsComponent} from "./course-details/course-details.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:subject', component: CourseDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule{}
