import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { CheckOutComponent } from './check-out.component';
import { ViewModule } from '../view/view.module';


@NgModule({
  declarations: [CheckOutComponent],
  imports: [
    CommonModule,
    CheckOutRoutingModule,
    ViewModule
  ],
  exports:[CheckOutComponent]
})
export class CheckOutModule { }
