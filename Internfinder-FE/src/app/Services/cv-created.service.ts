import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CvCreated} from "../dto/CvCreated";

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
      , 'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

    };
  }
  createCV(data: CvCreated): Observable<any>{
    console.log("vo service");
    console.log(data);
    return this.httpClient.post('http://localhost:8080/cv/postdata', data);
  }
  download(value: any, idtemplate: any):string{

    return window.location.href = `${'http://localhost:8080/cv/getcv/'}${value}/${idtemplate}`;
  }
}

