import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


interface Token {
  exp: number,
  user: {
    id: string,
    isTeacher: boolean;
  }
}

@Injectable()
export class AuthenticationService {

  private api = 'http://gostudent.s1910456012.student.kwmhgb.at/api/auth';

  constructor(private http: HttpClient) { }

  login(email: string, password: string ) : Observable<any> {
    return this.http.post(`${this.api}/login`, {'email': email, 'password': password});
  }
  public getCurrentUserId() {
    return Number.parseInt(<string>sessionStorage.getItem("userId"));
  }

  public isTeacher() {
    return Number(sessionStorage.getItem("isTeacher"));
  }

  public setSessionStorage(token: string) {
    console.log("storing token");
    console.log(jwt_decode(token));
    const decodedToken = jwt_decode(token) as Token;
    console.log(decodedToken);
    console.log(decodedToken.user.id);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", decodedToken.user.id);
    sessionStorage.setItem("isTeacher", String(decodedToken.user.isTeacher));

  }

  logout() {
    this.http.post(`${this.api}/logout`, {});
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("isTeacher");
    console.log("Logged out");
  }

  public isLoggedIn() {
    if (sessionStorage.getItem("token")) {
      let token : string = <string> sessionStorage.getItem("token");
      console.log(jwt_decode(token));
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if (expirationDate < new Date()) {
        console.log("token expired");
        sessionStorage.removeItem("token");
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }
}
