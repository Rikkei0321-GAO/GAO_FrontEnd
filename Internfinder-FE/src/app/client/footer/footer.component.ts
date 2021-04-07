import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../Services/loadcss.services";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loaddCss('assets/page/css/bootstrap.css');
    this.loadcssServices.loaddCss('assets/page/css/style.css');
    this.loadcssServices.loaddCss('assets/page/css/styles.css');
    this.loadcssServices.loadScript('assets/page/js/jquery.min.js');
    this.loadcssServices.loadScript('assets/page/js/scripts.js');
    this.loadcssServices.loadScript('assets/page/js/responsiveslides.min.js');
  }

  ngOnInit(): void {
  }

}
