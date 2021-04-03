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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
