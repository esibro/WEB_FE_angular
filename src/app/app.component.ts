import { Component } from '@angular/core';
import {Course} from "./shared/course";
import { HttpClient } from '@angular/common/http';
import {AuthenticationService} from "./shared/authentication.service";

@Component({
  selector: 'bs-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  constructor(private authService:AuthenticationService) {
  }
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  getLoginLabel(){
    return this.isLoggedIn() ? "Logout" : "Login";
  }


  course: Course | undefined;
  title = 'GoStudent';
}
