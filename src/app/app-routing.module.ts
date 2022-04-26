import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mediaLuna', loadChildren: () => import('./pages/media-luna/media-luna.module').then(m => m.MediaLunaModule) },
  { path: 'carrito-segundo', loadChildren: () => import('./pages/carrito-jh2/carrito-jh2.module').then(m => m.CarritoJh2Module) },
  { path: 'check-out', loadChildren: () => import('./pages/check-out/check-out.module').then(m => m.CheckOutModule) },
  { path: "editor", loadChildren: () => import('./pages/editor/editor.module').then(m => m.EditorModule) },
  { path: "view", loadChildren: () => import('./pages/view/view.module').then(m => m.ViewModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'user-chat', loadChildren: () => import('./pages/user-chat/user-chat.module').then((m) => m.UserChatModule), },
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '**', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
