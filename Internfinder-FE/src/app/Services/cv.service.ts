import { Injectable } from '@angular/core';
import {environment} from "../enviroment/enviroment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getCv(): Observable<Cv[]> {
    return this.http.get<Cv[]>(`${this.apiServerUrl}/employee/all`);
  }

  public addCv(cv: Cv): Observable<Cv> {
    return this.http.post<Cv>(`${this.apiServerUrl}/employee/add`, cv);
  }

  public updateCv(cv: Cv): Observable<Cv> {
    return this.http.put<Cv>(`${this.apiServerUrl}/employee/update`, cv);
  }

  public deleteCv(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${id}`);
  }
}
