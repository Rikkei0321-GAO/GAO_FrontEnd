import { Injectable } from '@angular/core';
// @ts-ignore
import {news} from "../module/news";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TimkiemService {
  private baseURL = 'http://localhost:8080/News/all';


  constructor(private httpClient: HttpClient) {
  }


  findAll(): Observable<news[]> {
    return this.httpClient.get<news[]>(this.baseURL);
  }

  deleteNews(idNews: any): Observable<any> {
    return this.httpClient.delete(`${'http://localhost:8080/News/delete'}/${idNews}`);
  }

  addNews(data: any): Observable<any>{
    return this.httpClient.post<news>('http://localhost:8080/News/add', data);
  }

  updateNews(idNews: any, data: any): Observable<any> {
    return this.httpClient.put(`${'http://localhost:8080/News/'}/${idNews}`, data);
  }
  getNews(idCa: any): Observable<any> {
    return this.httpClient.get(`${'http://localhost:8080/Category/'}/${idCa}`);
  }
  getIdCategory(id: any): Observable<any> {
    return this.httpClient.get(`${'http://localhost:8080/Category/all/'}`);
  }

}
