import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../Services/loadcss.services";
import {TokenStorageService} from "../../Services/token-storage.service";
import {AccountService} from "../../Services/Account.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private  loadcssServices: LoadcssServices,
              private tokenStorage: TokenStorageService,
              private  router: Router) {

    this.loadcssServices.loaddCss('assets/Client/minhhoang/style.css');
    this.loadcssServices.loaddCss('assets/Client/minhhoang/matrialize.css');
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/email-decode.min.js');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/bootstrap.min.js');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/jquery-ui.min.js');
    this.loadcssServices.loadScript('assets/Client/minhhoang/js/custom.js');
  }

  isLoggedIn = false;

  id_now :number=0
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    console.log(this.id_now)
  }
  getOneByID(){
    this.router.navigate(['/profile',this.id_now])
  }
  logout(){
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
