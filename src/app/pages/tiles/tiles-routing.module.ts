import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TilesComponent } from './tiles.component';

const routes: Routes = [{ path: '', component: TilesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TilesRoutingModule { }
