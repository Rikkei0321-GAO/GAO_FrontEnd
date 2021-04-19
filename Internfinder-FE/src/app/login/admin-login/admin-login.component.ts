import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";
import {TokenStorageService} from "../../Services/token-storage.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  // @ts-ignore
  formRegCompany: FormGroup;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
              private router: Router,
              private formBuild: FormBuilder) {
    this.formRegCompany = this.formBuild.group({
        username: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(50),Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
        password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      }
    );
  }
  validation_messages = {
    'username': [
      {type: 'required',message: 'Trường này không được để trống!'},
      {type:'pattern',message: 'Tên không chứa các ký tự đặc biệt' },
      {type:'pattern',message: 'Tên đăng nhập nhiều hơn 5 ký tự' },
      {type: 'maxlength', message: 'Tên đăng nhập ít hơn 50 ký tự'},
    ],
    'password': [
      {type: 'required',message: 'Trường này không được để trống!'},
      {type: 'minlength', message: 'Mật khẩu nhiều hơn 6 ký tự'},
      {type: 'maxlength', message: 'Mật khẩu ít hơn 20 ký tự'},
    ]
  };

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
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }


}
