import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuanlytaikhoanIndexComponent} from './admin/quanlytaikhoan/quanlytaikhoan-index/quanlytaikhoan-index.component';
import {QuanlytaikhoanCreateComponent} from './admin/quanlytaikhoan/quanlytaikhoan-create/quanlytaikhoan-create.component';
import {QuanlytaikhoanEditComponent} from './admin/quanlytaikhoan/quanlytaikhoan-edit/quanlytaikhoan-edit.component';
import {QuanlybaidangIndexComponent} from './admin/quanlybaidang/quanlybaidang-index/quanlybaidang-index.component';
import {QuanlybaidangCreateComponent} from './admin/quanlybaidang/quanlybaidang-create/quanlybaidang-create.component';

const routes: Routes = [
  {path: 'admin/quanlytaikhoan/index', component: QuanlytaikhoanIndexComponent},
  {path: 'admin/quanlytaikhoan/create', component: QuanlytaikhoanCreateComponent},
  {path: 'admin/quanlytaikhoan/edit', component: QuanlytaikhoanEditComponent},
  {path: 'admin/quanlybaidang/index', component: QuanlybaidangIndexComponent},
  {path: 'admin/quanlybaidang/create', component: QuanlybaidangCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
