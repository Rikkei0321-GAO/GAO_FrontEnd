import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class CvCreatedService {
  httpOptions: any;
  // @ts-ignore
  constructor(private  httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ` })
      , 'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }
  createCV(value: any): Observable<any>{
    console.log("vo service");
    console.log(value);
    // @ts-ignore
    return this.httpClient.post('http://localhost:8080/cv/postdata', value);
  }
  download():Observable<any>{
    // @ts-ignore
    return this.httpClient.get('http://localhost:8080/cv/getcv/1/1');
  }
}
