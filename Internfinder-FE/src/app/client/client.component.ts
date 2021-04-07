import { Component, OnInit } from '@angular/core';
import { LoadcssServices} from '../Services/loadcss.services';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor( private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loaddCss('assets/page/css/bootstrap.css');
    this.loadcssServices.loaddCss('assets/page/css/style.css');
    this.loadcssServices.loaddCss('assets/page/css/styles.css')

  }

  ngOnInit(): void {
  }

}
