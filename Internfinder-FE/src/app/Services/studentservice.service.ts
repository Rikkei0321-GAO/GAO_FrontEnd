import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../module/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(private http: HttpClient) { }

  // @ts-ignore
  create(data): Observable<any>
  {
    return this.http.post<Student>('http://localhost:8080/signup/add-student',data);
  }
}
