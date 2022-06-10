import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  exports:[NotFoundComponent],
  schemas:[
    NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class NotFoundModule { }
