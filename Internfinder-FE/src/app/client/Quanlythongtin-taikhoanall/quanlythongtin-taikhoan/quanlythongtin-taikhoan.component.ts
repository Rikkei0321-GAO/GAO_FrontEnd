import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AccountService} from "../../../Services/Account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AccountClass} from "../../../model/Account.class";
import {TokenStorageService} from "../../../_services/token-storage.service";

@Component({
  selector: 'app-quanlythongtin-taikhoan',
  templateUrl: './quanlythongtin-taikhoan.component.html',
  styleUrls: ['./quanlythongtin-taikhoan.component.css']
})
export class QuanlythongtinTaikhoanComponent implements OnInit {

  constructor(private  fb: FormBuilder,
              private  accountservice: AccountService,
              private  activatedRouteService: ActivatedRoute,
              private  token: TokenStorageService,
              private  router: Router) {
  }
  public  id_now :number=0
  public id: number=0
  // @ts-ignore
  account: AccountClass=new AccountClass();
  // @ts-ignore
  ngOnInit(): void {
    this.id = this.activatedRouteService.snapshot.params['id'];
    console.log(this.id)
    this.accountservice.getOne(this.id).subscribe(data=>{
      this.account=data
      console.log(data)
    },error => console.log(error))
    let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    console.log(this.id_now)

  }
  getOne(){
    this.router.navigate(['/profile/edit',this.id_now])
  }
}
