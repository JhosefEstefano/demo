import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TilesRoutingModule } from './tiles-routing.module';
import { TilesComponent } from './tiles.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [TilesComponent],
  imports: [CommonModule, TilesRoutingModule, NgxSpinnerModule],
  exports: [TilesComponent],
})
export class TilesModule {}
