// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// @ts-ignore
import {AdminModule} from './admin/admin.module';
import {QuanlytaikhoanIndexComponent} from './admin/quanlytaikhoan-index/quanlytaikhoan-index.component';
import { MenuComponent } from './menu/menu.component';
import {ClientComponent} from './menu/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    QuanlytaikhoanIndexComponent,
    MenuComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
