import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { NgAvataaarsLibraryModule } from 'ng-avataaars-library';


@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    NgAvataaarsLibraryModule
  ],
  exports: [EditorComponent]
})
export class EditorModule { }
