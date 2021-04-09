import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from '../../Services/loadcss.services';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  formGroup: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
