// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// @ts-ignore
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AdminModule} from './admin/admin.module';
import {QuanlytaikhoanIndexComponent} from './admin/quanlytaikhoan-index/quanlytaikhoan-index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    QuanlytaikhoanIndexComponent
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
