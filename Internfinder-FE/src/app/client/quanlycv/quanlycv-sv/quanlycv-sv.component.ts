import {Component, Input, OnInit} from '@angular/core';
import {CV} from "../../../model/CV";
import {CvService} from "../../../Services/cv.service";

@Component({
  selector: 'app-quanlycv-sv',
  templateUrl: './quanlycv-sv.component.html',
  styleUrls: ['./quanlycv-sv.component.css']
})
export class QuanlycvSvComponent implements OnInit {
  cvlist: CV[] = [];
  isDisable:boolean = false;
  // @ts-ignore
  private _name:string;

  get name(): string {
    return this._name;
  }

  @Input()
  set name(value: string) {
    this._name = value;

    if(this.name){
      this.cvlist = this._cv.cvlist.filter(item => {
        return item.name.includes(this.name);
      })
    } else {
      this.cvlist = this._cv.cvlist;
    }
  }

  constructor(private _cv: CvService) { }

  ngOnInit(): void {
    this.cvlist = this._cv.cvlist;
  }
  removeCV(index:number){
    this.cvlist.splice(index,1);
  }

}
