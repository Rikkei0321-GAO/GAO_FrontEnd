import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { QuanlytaikhoanIndexComponent } from './admin/quanlytaikhoan/quanlytaikhoan-index/quanlytaikhoan-index.component';
import { QuanlytaikhoanCreateComponent } from './admin/quanlytaikhoan/quanlytaikhoan-create/quanlytaikhoan-create.component';
import { QuanlytaikhoanEditComponent } from './admin/quanlytaikhoan/quanlytaikhoan-edit/quanlytaikhoan-edit.component';
import { QuanlybaidangIndexComponent } from './admin/quanlybaidang/quanlybaidang-index/quanlybaidang-index.component';
import { QuanlybaidangEditComponent } from './admin/quanlybaidang/quanlybaidang-edit/quanlybaidang-edit.component';
import { QuanlybaidangCreateComponent } from './admin/quanlybaidang/quanlybaidang-create/quanlybaidang-create.component';
import { QuanlybaichiaseIndexComponent } from './admin/quanlybaichiase/quanlybaichiase-index/quanlybaichiase-index.component';
import { QuanlybaichiaseCreateComponent } from './admin/quanlybaichiase/quanlybaichiase-create/quanlybaichiase-create.component';
import { QuanlybaichiaseEditComponent } from './admin/quanlybaichiase/quanlybaichiase-edit/quanlybaichiase-edit.component';
import { QuanlymauCVComponent } from './admin/quanlymau-cv/quanlymau-cv.component';
import { QuanlymaucvIndexComponent } from './admin/quanlymau-cv/quanlymaucv-index/quanlymaucv-index.component';
import { QuanlymaucvCreateComponent } from './admin/quanlymau-cv/quanlymaucv-create/quanlymaucv-create.component';
import { QuanlymaucvDetailComponent } from './admin/quanlymau-cv/quanlymaucv-detail/quanlymaucv-detail.component';
import { QuanlymaucvEditComponent } from './admin/quanlymau-cv/quanlymaucv-edit/quanlymaucv-edit.component';
import { ModuleCreateCvComponent } from './client/module-create-cv/module-create-cv.component';
import { PageComponent } from './client/page/page.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { QuanlythongtintaikhoanSinhvienComponent } from './client/quanlythongtintaikhoan-sinhvien/quanlythongtintaikhoan-sinhvien.component';
import { LoginComponent } from './login/login.component';
import {AdminLoginComponent} from './login/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    QuanlytaikhoanIndexComponent,
    QuanlytaikhoanCreateComponent,
    QuanlytaikhoanEditComponent,
    QuanlybaidangIndexComponent,
    QuanlybaidangEditComponent,
    QuanlybaidangCreateComponent,
    QuanlybaichiaseIndexComponent,
    QuanlybaichiaseCreateComponent,
    QuanlybaichiaseEditComponent,
    QuanlymauCVComponent,
    QuanlymaucvIndexComponent,
    QuanlymaucvCreateComponent,
    QuanlymaucvDetailComponent,
    QuanlymaucvEditComponent,
    ModuleCreateCvComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    QuanlythongtintaikhoanSinhvienComponent,
    AdminLoginComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
