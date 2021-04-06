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
      this.loadcssServices.loaddCss('assets/page/css/styles.css');
      this.loadcssServices.loaddCss('assets/page/css/popuo-box.css');
      this.loadcssServices.loaddCss('assets/page/css/flexslider.css');
      this.loadcssServices.loaddCss('assets/page/css/default');
      this.loadcssServices.loadScript('assets/page/js/jquery.min.js');
      this.loadcssServices.loadScript('assets/page/js/scripts.js');
      // this.loadcssServices.loadScript('assets/page/js/responsiveslides.min.js');
      this.loadcssServices.loadScript('assets/page/js/jquery.magnific-popup.js');
      this.loadcssServices.loadScript('assets/page/js/easyResponsiveTabs.js');

      this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
      this.loadcssServices.loaddCss('/assets/Client/forum-mockup-master/css/style.css');
      this.loadcssServices.loaddCss('assets/Client/CSS/styless.css');

  }

  ngOnInit(): void {
  }

}
