import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";

@Component({
  selector: 'app-login-gg',
  templateUrl: './login-gg.component.html',
  styleUrls: ['./login-gg.component.css']
})
export class LoginGgComponent implements OnInit {
  // @ts-ignore
  loginForm: FormGroup;
  // @ts-ignore
  socialUser: SocialUser;
  // @ts-ignore
  isLoggedin: boolean;




  constructor(private formBuilder: FormBuilder,
              private socialAuthService: SocialAuthService) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });

  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

}
