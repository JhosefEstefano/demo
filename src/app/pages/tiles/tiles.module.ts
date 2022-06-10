import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TilesRoutingModule } from './tiles-routing.module';
import { TilesComponent } from './tiles.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ViewModule } from '../view/view.module';

@NgModule({
  declarations: [TilesComponent],
  imports: [CommonModule, TilesRoutingModule, NgxSpinnerModule, ViewModule],
  exports: [TilesComponent],
})
export class TilesModule {}
