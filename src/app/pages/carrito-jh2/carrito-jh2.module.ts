import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoJh2RoutingModule } from './carrito-jh2-routing.module';
import { CarritoJh2Component } from './carrito-jh2.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [CarritoJh2Component],
  imports: [
    CommonModule,
    CarritoJh2RoutingModule,
    NgxMasonryModule,
    NgxSpinnerModule,
  ],
  exports: [CarritoJh2Component],
})
export class CarritoJh2Module {}
