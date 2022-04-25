import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoJh2Component } from './carrito-jh2.component';

const routes: Routes = [
  {path: '', component: CarritoJh2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoJh2RoutingModule { }
