import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaLunaRoutingModule } from './media-luna-routing.module';
import { MediaLunaComponent } from './media-luna.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ViewModule } from '../view/view.module';


@NgModule({
  declarations: [MediaLunaComponent],
  imports: [
    CommonModule,
    MediaLunaRoutingModule,
    NgxSpinnerModule,
    ViewModule
  ],
  exports: [MediaLunaComponent]
})
export class MediaLunaModule { }
