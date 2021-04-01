import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuanlytaikhoanIndexComponent} from './quanlytaikhoan-index/quanlytaikhoan-index.component';

const routes: Routes = [
  {path: 'index', component : QuanlytaikhoanIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
