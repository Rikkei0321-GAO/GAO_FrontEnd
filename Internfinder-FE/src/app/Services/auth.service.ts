import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AbstractControl, FormControl, ValidationErrors} from "@angular/forms";

const auth_api = 'http://localhost:8080/api/public/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }
  // @ts-ignore
  login(obj): Observable<any> {
    return this.http.post(auth_api + 'login', {
      username: obj.username,
      password: obj.password,
      email:obj.email
    }, this.httpOptions);
  }

  verify(code: string): Observable<any>{
    console.log(code);
    return this.http.post(auth_api + 'verify', {
      code: code
    }, this.httpOptions);
  }

  verifyPassword(code: string): Observable<any> {
    return this.http.post(auth_api + 'verify-password', {
      code: code
    }, this.httpOptions);
  }

  resetPassword(email: string): Observable<any> {
    console.log(email)
    return this.http.post(auth_api + 'reset-password', {
      email: email,
    }, this.httpOptions);
  }

  doResetPassword(password: string, code: string): Observable<any> {
    return this.http.post(auth_api + 'do-reset-password', {
      password: password,
      code: code
    }, this.httpOptions);
  }

}
