import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../Services/loadcss.services";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private  loadcssServices: LoadcssServices) {
    //   this.loadcssServices.loaddCss('assets/Client/minhhoang/bootstrap.css');
    //   this.loadcssServices.loaddCss('/assets/Client/minhhoang/style.css');
    //   this.loadcssServices.loaddCss('/assets/Client/minhhoang/matrialize.css');
    //   this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    //   this.loadcssServices.loadScript('/assets/Client/minhhoang/js/email-decode.min.js');
    //   this.loadcssServices.loadScript('/assets/Client/minhhoang/js/bootstrap.min.js');
    //   this.loadcssServices.loadScript('/assets/Client/minhhoang/js/jquery-ui.min.js');
    //   this.loadcssServices.loadScript('/assets/Client/minhhoang/js/custom.js');
  }
  ngOnInit(): void {
  }

}
