import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../Services/loadcss.services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  // constructor(private  loadcssServices: LoadcssServices) {
  //   this.loadcssServices.loaddCss('assets/page/css/bootstrap.css');
  //   this.loadcssServices.loaddCss('assets/page/css/style.css');
  //   this.loadcssServices.loaddCss('assets/page/css/styles.css');
  //   this.loadcssServices.loaddCss('assets/page/css/popuo-box.css');
  //   this.loadcssServices.loaddCss('assets/page/css/flexslider.css');
  //   this.loadcssServices.loaddCss('assets/page/css/default');
  //   this.loadcssServices.loadScript('assets/page/js/jquery.min.js');
  //   this.loadcssServices.loadScript('assets/page/js/scripts.js');
  //   this.loadcssServices.loadScript('assets/page/js/jquery.magnific-popup.js');
  //   this.loadcssServices.loadScript('assets/page/js/easyResponsiveTabs.js');
  // }
  constructor(private  loadcssServices: LoadcssServices) {
    // this.loadcssServices.loaddCss('assets/Client/minhhoang/bootstrap.css');
    this.loadcssServices.loaddCss('/assets/Client/minhhoang/style.css');
    this.loadcssServices.loaddCss('/assets/Client/minhhoang/matrialize.css');
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.loadcssServices.loadScript('/assets/Client/minhhoang/js/email-decode.min.js');
    this.loadcssServices.loadScript('/assets/Client/minhhoang/js/bootstrap.min.js');
    this.loadcssServices.loadScript('/assets/Client/minhhoang/js/jquery-ui.min.js');
    this.loadcssServices.loadScript('/assets/Client/minhhoang/js/custom.js');
  }
  ngOnInit(): void {
  }

}
