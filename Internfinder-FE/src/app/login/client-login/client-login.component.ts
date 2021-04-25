import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../Services/token-storage.service";
import {AuthService} from "../../_services/auth.service";
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  // @ts-ignore
  loginForm: FormGroup;
  // @ts-ignore
  socialUser: SocialUser;
  // @ts-ignore
  isLoggein: boolean;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
              private router: Router,private formBuilder: FormBuilder,
              private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveTokenLocal(data.accessToken);
        this.tokenStorage.saveUserLocal(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  loginWithGoogle(flatform: string): void {
    flatform = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(flatform).then((respone)=>{
      console.log(flatform + "logged in user is=", respone)
      }
    )

  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

}
