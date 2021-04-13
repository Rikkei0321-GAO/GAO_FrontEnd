import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    alert("Thay đổi mật khẩu thành công!");
  }

}
