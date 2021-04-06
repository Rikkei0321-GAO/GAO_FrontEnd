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
import {PageComponent} from './client/page/page.component';
import {AdminComponent} from './admin/admin.component';
import {ClientComponent} from './client/client.component';
import {QuanlythongtintaikhoanSinhvienComponent} from './client/quanlythongtintaikhoan-sinhvien/quanlythongtintaikhoan-sinhvien.component';
import {QuanlybaidangEditComponent} from './admin/quanlybaidang/quanlybaidang-edit/quanlybaidang-edit.component';
import {LoginComponent} from './login/login.component';
import {AdminLoginComponent} from './login/admin-login/admin-login.component';

const routes: Routes = [
  {   path: 'admin', component: AdminComponent, children :
      [
        {path: 'quanlytaikhoan/index', component: QuanlytaikhoanIndexComponent},
        {path: 'quanlytaikhoan/create', component: QuanlytaikhoanCreateComponent},
        {path: 'quanlytaikhoan/edit', component: QuanlytaikhoanEditComponent},
        {path: 'quanlybaidang/index', component: QuanlybaidangIndexComponent},
        {path: 'quanlybaidang/create', component: QuanlybaidangCreateComponent},
        {path: 'quanlybaidang/edit', component: QuanlybaidangEditComponent },
        {path: 'quanlymaucv/index', component: QuanlymaucvIndexComponent},
        {path: 'quanlymaucv/create', component: QuanlymaucvCreateComponent},
        {path: 'quanlymaucv/detail', component: QuanlymaucvDetailComponent},
      ]
  },
  {
    path: '', component: ClientComponent, children :
      [
        {path: 'index', component: PageComponent},
        {path: 'create_cv', component: ModuleCreateCvComponent  },
        {path: 'quanlythongtintaikhoan-sinhvien', component : QuanlythongtintaikhoanSinhvienComponent}
      ]
  },
  {
    path: 'login', component: LoginComponent, children :
      [
        {path: 'admin', component: AdminLoginComponent  }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
