import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../Services/loadcss.services";
import {AccountClass} from "../../model/Account.class";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  // @ts-ignore
  us: AccountClass
  // @ts-ignore
  public logName: string;

  constructor(private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loaddCss('assets/Client/minhhoang/style.css');
    this.loadcssServices.loaddCss('assets/Client/minhhoang/matrialize.css');
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/email-decode.min.js');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/bootstrap.min.js');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/jquery-ui.min.js');
    // this.loadcssServices.loadScript('assets/Client/minhhoang/js/custom.js');
  }
  ngOnInit(): void {
    // @ts-ignore
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.us.username = userName['username'];
    this.logName = userName['username'];
  }

}
