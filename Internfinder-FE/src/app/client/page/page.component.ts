import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../Services/loadcss.services";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor( private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loaddCss('assets/page/css/bootstrap.css');
    this.loadcssServices.loaddCss('assets/page/css/styles.css');
    this.loadcssServices.loaddCss('assets/page/css/style.css');
    // this.loadcssServices.loaddCss('assets/page/css/popuo-box.css');
    // this.loadcssServices.loaddCss('assets/page/css/flexslider.css');
  }

  ngOnInit(): void {
  }

}
