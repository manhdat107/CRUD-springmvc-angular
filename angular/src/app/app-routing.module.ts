import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { order } from '../_model/Order';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderComponent } from './order/order.component';
import { ViewEditComponent } from './view-edit/view-edit.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent

  },
  {
    path: 'listview',
    component: OrderComponent
  },

  {
    path: 'create',
    component: CreateOrderComponent
  },
  {
    path: 'view/:id',
    component: ViewEditComponent
  },


]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
