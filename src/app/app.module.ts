import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SafeUrlPipe } from './safeimg.pipe';

import { UserChatModule } from './pages/user-chat/user-chat.module';
import { SharedModule } from './shared/shared.module';


import { HomeModule } from './pages/home/home.module';
import { MediaLunaModule } from './pages/media-luna/media-luna.module';
import { EditorModule } from './pages/editor/editor.module';
import { ViewModule } from './pages/view/view.module';



@NgModule({
  declarations: [
    AppComponent,
    SafeUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserChatModule,
    SharedModule,
    HomeModule,
    MediaLunaModule,
    EditorModule,
    ViewModule,
    SweetAlert2Module.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
