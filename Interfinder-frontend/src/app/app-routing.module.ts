// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {ClientComponent} from './menu/client/client.component';

const routes: Routes = [
  {path: '' , component : MenuComponent , children: [{path: 'client', component: ClientComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
