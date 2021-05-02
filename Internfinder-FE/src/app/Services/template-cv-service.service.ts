import {Inject, Injectable} from '@angular/core';
import {TemplateCV} from "../model/TemplateCV";
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TemplateCvServiceService {
  httpOptions: any;
  private baseUrl = 'http://localhost:8080/admincv/save/template';
  constructor(private  httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ` })
      , 'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }
  private apiServer = 'http://localhost:8080/admincv/';
  // @ts-ignore
  createTemplate(value): Observable<any>{
    console.log("vo service");
    console.log(value);
    // @ts-ignore
    return this.httpClient.post('http://localhost:8080/admincv/addTemplate', value);
  }
  // @ts-ignore
  // upload(value): Observable<any>{
  //   console.log(value);
  //   return this.httpClient.post(this.baseUrl,value);
  // }
  //@ts-ignore
  upload(file: File, value:any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    // @ts-ignore
    formData.append('template',value);
    const req = new HttpRequest('POST', `${this.baseUrl}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    // @ts-ignore
    console.log(formData.get('template'.toString()));

    return this.httpClient.request(req);
  }
}
