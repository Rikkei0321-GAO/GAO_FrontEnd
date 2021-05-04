import { Component, OnInit } from '@angular/core';
import {Cv_apply} from "../../../model/Cv_apply";
import {ActivatedRoute} from "@angular/router";
import {cvapplyService} from "../../../Services/cvapply.Service";

@Component({
  selector: 'app-quanlycv-sv',
  templateUrl: './quanlycv-sv.component.html',
  styleUrls: ['./quanlycv-sv.component.css']
})
export class QuanlycvSvComponent implements OnInit {
  // @ts-ignore
  items: CV[];
  // @ts-ignore
  pageOfItems: Array<any>;

  // @ts-ignore
  id: number;

  // @ts-ignore
  cv: Cv_apply[];

  constructor(private activatedRouteService: ActivatedRoute,private cvservice: cvapplyService) { }

  ngOnInit(): void {
    this.cvservice.getAll().subscribe(data => {
      // @ts-ignore
      this.cv = data;
    });
    // @ts-ignore
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `item ${i + 1}`}));
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
