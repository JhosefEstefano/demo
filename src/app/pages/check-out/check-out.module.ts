import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { CheckOutComponent } from './check-out.component';


@NgModule({
  declarations: [CheckOutComponent],
  imports: [
    CommonModule,
    CheckOutRoutingModule
  ],
  exports:[CheckOutComponent]
})
export class CheckOutModule { }
