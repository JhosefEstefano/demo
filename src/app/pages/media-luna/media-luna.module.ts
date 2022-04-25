import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaLunaRoutingModule } from './media-luna-routing.module';
import { MediaLunaComponent } from './media-luna.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [MediaLunaComponent],
  imports: [
    CommonModule,
    MediaLunaRoutingModule,
    NgxSpinnerModule
  ],
  exports: [MediaLunaComponent]
})
export class MediaLunaModule { }
