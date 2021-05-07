import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../Services/loadcss.services";
import {AccountClass} from "../../model/Account.class";
import {Category} from "../../model/Category";
import {baidangservice} from "../../Services/baidangservice.service";

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

  constructor(private  loadcssServices: LoadcssServices, private baidangser:baidangservice) {
    this.loadcssServices.loaddCss('assets/Client/minhhoang/style.css');
    this.loadcssServices.loaddCss('assets/Client/minhhoang/matrialize.css');
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/email-decode.min.js');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/bootstrap.min.js');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/jquery-ui.min.js');
    // this.loadcssServices.loadScript('assets/Client/minhhoang/js/custom.js');
  }
  id_now: number = 0;
  // @ts-ignore
  private idCata: string;
  lisstnganh: Category[] = [];
  // @ts-ignore
  getKeytitle: string;
  // @ts-ignore
  getidCategory: string;
  // @ts-ignore
  getDiadiem: string;
  ngOnInit(): void {
    // @ts-ignore
    this.baidangser.getIdCategory().subscribe(data => {
      this.lisstnganh = data;
      console.log('loi' + this.lisstnganh);

    }, error => {
      console.log('loi' + error);
    });
  }
  // @ts-ignore
  selected: any;

  // @ts-ignore
  public onOptionsSelected(event) {
    const value = event.target.value;
    this.idCata = value;
    console.log(value);
  }
}

