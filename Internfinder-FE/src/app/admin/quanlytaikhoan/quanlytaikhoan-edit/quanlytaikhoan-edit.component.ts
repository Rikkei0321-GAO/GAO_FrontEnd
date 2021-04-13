import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../Services/Account.service";
import {AccountClass} from "../../../model/Account.class";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-quanlytaikhoan-edit',
  templateUrl: './quanlytaikhoan-edit.component.html',
  styleUrls: ['./quanlytaikhoan-edit.component.css'],
  providers:[AccountService ]
})
export class QuanlytaikhoanEditComponent implements OnInit {

  constructor(private  fb: FormBuilder, private  accountservice: AccountService, private  activatedRouteService: ActivatedRoute, private  router: Router) {
  }
  // @ts-ignore
  public id: number;
  // @ts-ignore
  public  sub: Subscription;
  // @ts-ignore
  public  subpram: Subscription;
  // @ts-ignore
  account: AccountClass=new AccountClass();
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
      this.router.navigate(['/admin/quanlytaikhoan/index']);
    },error => console.log(error));
  }
  contactForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.maxLength(45)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    // createDate: new FormControl(''),
    status: new  FormControl('')
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
