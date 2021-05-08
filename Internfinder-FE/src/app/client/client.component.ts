// @ts-ignore
import { Component, OnInit } from '@angular/core';
import { LoadcssServices} from '../Services/loadcss.services';
import {TokenStorageService} from "../_services/token-storage.service";

// @ts-ignore
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

    constructor( private  loadcssServices: LoadcssServices,
                 private  token: TokenStorageService) {
      this.loadcssServices.loaddCss('assets/page/css/bootstrap.css');
      this.loadcssServices.loaddCss('assets/page/css/style.css');
      this.loadcssServices.loaddCss('assets/page/css/styles.css');
      // this.loadcssServices.loaddCss('assets/page/css/default.css');
        // this.loadcssServices.loadScript('assets/page/js/jquery.min.js');
      // this.loadcssServices.loadScript('assets/page/js/scripts.js');
      // this.loadcssServices.loadScript('assets/page/js/easyResponsiveTabs.js');
      this.loadcssServices.loaddCss('assets/Client/CSS/stylesMH.css');


    }
  ngOnInit(): void {

  }


}
