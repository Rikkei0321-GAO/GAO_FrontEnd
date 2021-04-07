import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from '../../../Services/loadcss.services';

@Component({
  selector: 'app-quanlycv-sv',
  templateUrl: './quanlycv-sv.component.html',
  styleUrls: ['./quanlycv-sv.component.css']
})
export class QuanlycvSvComponent implements OnInit {

  constructor(private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loaddCss('assets/Client/CSS/styless.css');
  }

  ngOnInit(): void {
  }

}
