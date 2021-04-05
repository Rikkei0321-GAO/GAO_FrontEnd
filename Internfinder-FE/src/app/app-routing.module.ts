import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuanlytaikhoanIndexComponent} from './admin/quanlytaikhoan/quanlytaikhoan-index/quanlytaikhoan-index.component';
import {QuanlytaikhoanCreateComponent} from './admin/quanlytaikhoan/quanlytaikhoan-create/quanlytaikhoan-create.component';
import {QuanlytaikhoanEditComponent} from './admin/quanlytaikhoan/quanlytaikhoan-edit/quanlytaikhoan-edit.component';
import {QuanlybaidangIndexComponent} from './admin/quanlybaidang/quanlybaidang-index/quanlybaidang-index.component';
import {QuanlybaidangCreateComponent} from './admin/quanlybaidang/quanlybaidang-create/quanlybaidang-create.component';
import {QuanlymaucvIndexComponent} from './admin/quanlymau-cv/quanlymaucv-index/quanlymaucv-index.component';
import {QuanlymaucvCreateComponent} from './admin/quanlymau-cv/quanlymaucv-create/quanlymaucv-create.component';
import {QuanlymaucvDetailComponent} from './admin/quanlymau-cv/quanlymaucv-detail/quanlymaucv-detail.component';
import {ModuleCreateCvComponent} from './client/module-create-cv/module-create-cv.component';
import {AdminComponent} from './admin/admin.component';
import {ClientComponent} from './client/client.component';
import {PageComponent} from './client/page/page.component';

const routes: Routes = [
  {path: '', component: PageComponent},
  {path: 'admin', component: AdminComponent, children: [
      {path: 'quanlytaikhoan/index', component: QuanlytaikhoanIndexComponent},
      {path: 'quanlytaikhoan/create', component: QuanlytaikhoanCreateComponent},
      {path: 'quanlytaikhoan/edit', component: QuanlytaikhoanEditComponent},
      {path: 'quanlybaidang/index', component: QuanlybaidangIndexComponent},
      {path: 'quanlybaidang/create', component: QuanlybaidangCreateComponent},
      {path: 'quanlymaucv/index', component: QuanlymaucvIndexComponent},
      {path: 'quanlymaucv/create', component: QuanlymaucvCreateComponent},
      {path: 'quanlymaucv/detail', component: QuanlymaucvDetailComponent}
    ]},
  {path: 'client', component: ClientComponent, children: [{path: 'create_cv', component: ModuleCreateCvComponent  }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
