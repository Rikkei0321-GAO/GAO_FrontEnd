import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from '../../Services/loadcss.services';

@Component({
  selector: 'app-quanlycv-ntd',
  templateUrl: './quanlycv-ntd.component.html',
  styleUrls: ['./quanlycv-ntd.component.css']
})
export class QuanlycvNtdComponent implements OnInit {

  constructor(private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loaddCss('assets/Client/CSS/styless.css');
  }

  ngOnInit(): void {
  }

}
