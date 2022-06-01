import { Component } from '@angular/core';
import {Course} from "./shared/course";
import { HttpClient } from '@angular/common/http';
import {AuthenticationService} from "./shared/authentication.service";

@Component({
  selector: 'bs-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(private authService:AuthenticationService) {
  }

  isTeacher(){
    return this.authService.isTeacher();
  }
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  getUserId(){
    return this.authService.getCurrentUserId();
  }

  getLoginLabel(){
    return this.isLoggedIn() ? "Logout" : "Login";
  }

  course: Course | undefined;
  title = 'GoStudent';
}
