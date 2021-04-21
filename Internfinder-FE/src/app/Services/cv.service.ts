import { Injectable } from '@angular/core';
import {CV} from "../model/CV";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private _cvlist: CV[] =[
    new CV("Phan Thanh Hải","20/10/2020","Đạt yêu cầu"),
    new CV("Phan Thanh","20/10/2020","Đạt yêu cầu"),
    new CV("Thanh Hải","20/10/2020","Chưa đạt yêu cầu"),
  ];

  get cvlist(): CV[] {
    return this._cvlist;
  }

  set cvlist(value: CV[]) {
    this._cvlist = value;
  }

  constructor() { }
}
