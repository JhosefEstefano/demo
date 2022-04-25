import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaLunaComponent } from './media-luna.component';

const routes: Routes = [
  {path: '', component: MediaLunaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaLunaRoutingModule { }
