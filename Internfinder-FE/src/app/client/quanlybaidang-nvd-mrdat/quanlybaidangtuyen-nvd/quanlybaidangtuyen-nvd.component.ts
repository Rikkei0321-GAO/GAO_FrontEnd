import { Component, OnInit } from '@angular/core';
import {ShareService} from "../../../Services/Share.Service";
import {ActivatedRoute, Router} from "@angular/router";
import {ShareClass} from "../../../model/Share.Class";
import {NewService} from "../../../Services/NewService";
import {NewsClass} from "../../../model/News.class";

@Component({
  selector: 'app-quanlybaidangtuyen-nvd',
  templateUrl: './quanlybaidangtuyen-nvd.component.html',
  styleUrls: ['./quanlybaidangtuyen-nvd.component.css']
})
export class QuanlybaidangtuyenNvdComponent implements OnInit {
  constructor(private newsService: NewService,
              private  activatedRouteService: ActivatedRoute,
              private  router: Router) {
  }
  public  id_now :number=0;
  public id: number=0;
  pageOfItems : number = 1;
  // @ts-ignore
  public newlist: NewsClass[];
  // @ts-ignore
  public  news: NewsClass;
  ngOnInit(): void {
    this.id = this.activatedRouteService.snapshot.params['id'];
    this.getAllQuanlytaikhoan();
    // @ts-ignore
    this.news = new NewsClass();
    // @ts-ignore
  }

  getAllQuanlytaikhoan(){
    let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    this.newsService.getAllbyIdAccount(this.id_now).subscribe(data=>{
      this.newlist = data;
      console.log(data)
    }, error => {
      console.log(error)
    })
  }
  getOneID(id: number){
    this.router.navigate(['/quanlybaidangtuyen/details',id])
  }
  keyword: any;
  // @ts-ignore
  search(){
    if (this.keyword ==""){
      this.ngOnInit()
    }
    else {
      return this.newsService.seach(this.keyword).subscribe(data=>{
        this.newlist =data
      })
    }
  }


}
