import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../../Services/Account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AccountClass} from "../../../model/Account.class";
import {NewService} from "../../../Services/NewService";
import {NewsClass} from "../../../model/News.class";

@Component({
  selector: 'app-quanlybaidang-edit',
  templateUrl: './quanlybaidang-edit.component.html',
  styleUrls: ['./quanlybaidang-edit.component.css']
})
export class QuanlybaidangEditComponent implements OnInit {
  constructor(private  fb: FormBuilder, private  accountservice: NewService, private  activatedRouteService: ActivatedRoute, private  router: Router) {
  }
  // @ts-ignore
  public id: number;
  // @ts-ignore
  public  sub: Subscription;
  // @ts-ignore
  public  subpram: Subscription;
  // @ts-ignore
  account: NewsClass=new NewsClass();
  // @ts-ignore
  activateRouteService: ActivatedRoute;
  ngOnInit(): void {
    // @ts-ignore
    this.id=this.activatedRouteService.snapshot.params['id'];
    this.accountservice.getOne(this.id).subscribe(data=>{
      this.account=data
      console.log(data)
    },error => console.log(error))
  }
  OnEdit(){
    this.accountservice.edit(this.id,this.account).subscribe(data=>{
      console.log(data);
      // this.router.navigate(['list']);
      console.log(alert("Cập nhật thành công !"))
      this.router.navigate(['/admin/quanlybaidang/index']);
    },error => console.log(error));
  }
  contactForm = new FormGroup({
    decriptions: new FormControl(''),
    title: new FormControl('' ),
    // createDate: new FormControl(''),
    status: new  FormControl(''),
    idAccount:new FormControl('' ),
    idCategory:new FormControl('')
    // fullName:new  FormControl(''),
    // brithday:new  FormControl(''),
    // address:new  FormControl(''),
    // email:new  FormControl(''),
    // companyName:new  FormControl(''),
    // taxtCode:new  FormControl(''),
    // link:new  FormControl(''),
    // nameContact:new  FormControl(''),
    // sex:new  FormControl('')
  });
}
