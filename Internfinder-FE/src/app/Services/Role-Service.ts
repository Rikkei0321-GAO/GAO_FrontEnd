import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRole} from '../entity/IRole';

@Injectable({
providedIn: 'root'
})
export class RoleService {
  private baseURL = null;
  constructor(
    private http: HttpClient
  ) {
  }
  findAll(): Observable<IRole[]>{
// @ts-ignore
    return this.http.get<IRole[]>(this.baseURL);
  }
}
