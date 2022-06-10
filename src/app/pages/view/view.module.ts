import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    ViewRoutingModule
  ],schemas:[
    NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[ViewComponent]
})
export class ViewModule { }
