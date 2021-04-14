import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// @ts-ignore
import {news} from "../module/news";

@Injectable({
  providedIn: 'root'
})
export class baidangservice {

  // private baseURL = 'http://172.16.1.149/News/all';

  private baseURL = 'http://localhost:8080/Category/all/';
  constructor(private httpClient: HttpClient) {
  }


  findAll(): Observable<news[]> {
    return this.httpClient.get<news[]>(this.baseURL);
  }

  deleteNews(idNews: any): Observable<any> {
    return this.httpClient.delete(`${'http://localhost:8080/News/delete'}/${idNews}`);

  }

  addNews(data: any): Observable<any>{
    console.log("kaka:" + data);
    return this.httpClient.post<news>('http://localhost:8080/News/add', data);
  }

  updateNews(idNews: any, data: any): Observable<any> {
    return this.httpClient.put(`${'http://localhost:8080/News/'}/${idNews}`, data);
  }
  getNews(idNews: any): Observable<any> {
    return this.httpClient.get(`${'http://localhost:8080/News/'}/${idNews}`);
  }
  getIdCategory(id: any): Observable<any> {
    return this.httpClient.get(`${'http://localhost:8080/Category/all/'}`);
  }
}
