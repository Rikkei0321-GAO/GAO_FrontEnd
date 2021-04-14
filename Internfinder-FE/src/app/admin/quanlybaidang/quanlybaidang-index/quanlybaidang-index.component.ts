import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NewsClass} from "../../../model/News.class";
import {NewService} from "../../../Services/NewService";

@Component({
  selector: 'app-quanlybaidang-index',
  templateUrl: './quanlybaidang-index.component.html',
  styleUrls: ['./quanlybaidang-index.component.css']
})
export class QuanlybaidangIndexComponent implements OnInit {

  items = []
  // @ts-ignore
  pageOfItems : Array<any>
  // @ts-ignore
  private  Subscription: Subscription;
  // @ts-ignore
  public quanlybaidangs: NewsClass[];
  // @ts-ignore
  public  account: NewsClass;
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  ngOnInit(): void {
    this.getAllQuanlytaikhoan();
    // @ts-ignore
    this.account = new NewsClass();
    // @ts-ignore
    this.items = Array(5).fill(0).map((x, i) => ({ id: (i + 1), account: `item ${i + 1}`}));
  }
  constructor(private quanlytaikhoanService: NewService , private  router: Router) {
  }
  reloadData() {
    this.quanlytaikhoanService.getAll().subscribe(data => {
      // @ts-ignore
      this.quanlybaidangs = data;
    });
  }
  //index data
  getAllQuanlytaikhoan(){
    this.Subscription = this.quanlytaikhoanService.getAll().subscribe(data=>{
      // @ts-ignore
      this.quanlybaidangs = data;
      console.log(data)
    }, error => {
      console.log(error)
    })
  }
  //get id
  OnEdit(idaccount: number){
    this.router.navigate(['/admin/quanlybaidang/edit',idaccount])
  }
  OnDetails(idaccount: number){
    this.router.navigate(['/admin/quanlybaidang/create',idaccount])
  }
}
