import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
// @ts-ignore
import {AuthService} from "../../Services/auth.Service";

@Component({
  selector: 'app-verify-reset-password',
  templateUrl: './verify-reset-password.component.html',
  styleUrls: ['./verify-reset-password.component.css']
})
export class VerifyResetPasswordComponent implements OnInit {
  isSuccessful = true;
  // @ts-ignore
  isSendMail: boolean;
  // @ts-ignore
  isSubmited: true;

  // @ts-ignore
  formGroup: FormGroup;
  // @ts-ignore
  private newPassword: FormControl;

  // @ts-ignore
  private repeatNewPassword: FormControl;

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.newPassword = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]);
    this.repeatNewPassword = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]);
    this.formGroup = this.formBuilder.group({
      newPassword: this.newPassword,
      repeatNewPassword: this.repeatNewPassword,
    });
    this.route.queryParams.subscribe(params => {
      let code = params['code'];
      if (code == null) {
        this.isSendMail = false;
      } else {
        this.isSendMail = true;
        this.isSuccessful = false;
        this.authService.verifyPassword(code).subscribe(
          data => {
            this.isSuccessful = (data.message === 'accepted');
          },
          err => {
            this.isSuccessful = false;
          }
        );
      }
    });
  };
// @ts-ignore
  code: string;
  onSubmitt() {

    if (this.formGroup.value.newPassword === this.formGroup.value.repeatNewPassword) {
      this.route.queryParams.subscribe(params => {
        this.code = params['code'];
      });
      this.authService.doResetPassword(this.formGroup.value.newPassword, this.code).subscribe(data => {
        this.toastr.success('Mật khẩu đã được thay đổi!', "Thành công");
        this.router.navigateByUrl("/")
      })
    } else {
      this.toastr.error("Trường nhập lại mật khẩu và mật khẩu không giống nhau!", "Lỗi: ", {
        timeOut: 3500,
        extendedTimeOut: 1500
      })
    }
  }

  validation_messages = {
    'password': [
      {type: 'required', message: 'Trường này không được để trống!'},
      {type: 'minlength', message: 'Mật khẩu cần nhiều hơn 8 ký tự'},
      {type: 'maxlength', message: 'Mật khẩu chỉ được ít hơn 32 ký tự'},
    ]
  };

}
