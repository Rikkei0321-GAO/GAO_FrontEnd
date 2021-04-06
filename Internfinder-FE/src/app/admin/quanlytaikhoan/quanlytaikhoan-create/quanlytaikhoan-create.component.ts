import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from '../../../Services/loadcss.services';

@Component({
  selector: 'app-quanlytaikhoan-create',
  templateUrl: './quanlytaikhoan-create.component.html',
  styleUrls: ['./quanlytaikhoan-create.component.css']
})
export class QuanlytaikhoanCreateComponent implements OnInit {

  constructor(private  loadcssServices: LoadcssServices) {
    setTimeout(() => {
      this.loadcssServices.loadScript('assets/admin/js/sb-admin-2.min.js');
      this.loadcssServices.loadScript('assets/admin/vendor/jquery/jquery.min.js');
      this.loadcssServices.loadScript('assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js');
      this.loadcssServices.loadScript('assets/admin/vendor/jquery-easing/jquery.easing.min.js');
      this.loadcssServices.loadScript('assets/admin/vendor/datatables/jquery.dataTables.min.js');
      this.loadcssServices.loadScript('assets/admin/vendor/datatables/dataTables.bootstrap4.min.js');
      this.loadcssServices.loadScript('assets/admin/js/demo/datatables-demo.js');
    }, 310);
  }

  ngOnInit(): void {
  }

}
