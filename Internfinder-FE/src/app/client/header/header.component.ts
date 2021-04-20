import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../Services/loadcss.services";
import {TokenStorageService} from "../../Services/token-storage.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private  loadcssServices: LoadcssServices,
              private tokenStorage: TokenStorageService) {

    this.loadcssServices.loaddCss('assets/Client/minhhoang/style.css');
    this.loadcssServices.loaddCss('assets/Client/minhhoang/matrialize.css');
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/email-decode.min.js');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/bootstrap.min.js');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/jquery-ui.min.js');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/custom.js');
  }

  isLoggedIn = false;


  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();

  }

  logout(){
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
