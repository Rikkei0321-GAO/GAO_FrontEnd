import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from '../../../Services/loadcss.services';

@Component({
  selector: 'app-cv-accept',
  templateUrl: './cv-accept.component.html',
  styleUrls: ['./cv-accept.component.css']
})
export class CvAcceptComponent implements OnInit {

  constructor(private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loaddCss('assets/Client/CSS/styless.css');
  }

  ngOnInit(): void {
  }

}
