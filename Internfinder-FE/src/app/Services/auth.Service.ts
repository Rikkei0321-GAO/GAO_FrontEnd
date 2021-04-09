import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = null;

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
  login(obj: { username: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: obj.username,
      password: obj.password
    }, this.httpOptions);
  }

  verify(code: string): Observable<any> {
    console.log(code);
    return this.http.post(AUTH_API + 'verify', {
      scode: code
    }, this.httpOptions);
  }
  verifyPassword(code: string): Observable<any> {
    return this.http.post(AUTH_API + 'verify-password', {
      scode: code
    }, this.httpOptions);
  }
  resetPassword(username: string): Observable<any> {
    return this.http.post(AUTH_API + 'reset-password', {
      r_username: username,
    }, this.httpOptions);
  }

  doResetPassword(password: string, code: string): Observable<any> {
    return this.http.post(AUTH_API + 'do-reset-password', {
      dr_password: password,
      dr_code: code
    }, this.httpOptions);
  }
}
