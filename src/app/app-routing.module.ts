import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'mediaLuna',
    loadChildren: () =>
      import('./pages/media-luna/media-luna.module').then(
        (m) => m.MediaLunaModule
      ),canActivate: [AuthGuard]
  },
  {
    path: 'carrito-segundo',
    loadChildren: () =>
      import('./pages/carrito-jh2/carrito-jh2.module').then(
        (m) => m.CarritoJh2Module
      ),canActivate: [AuthGuard]
  },
  {
    path: 'check-out',
    loadChildren: () =>
      import('./pages/check-out/check-out.module').then(
        (m) => m.CheckOutModule,
      ),canActivate: [AuthGuard]
  },
  {
    path: 'editor',
    loadChildren: () =>
      import('./pages/editor/editor.module').then((m) => m.EditorModule),canActivate: [AuthGuard]
  },
  {
    path: 'view',
    loadChildren: () =>
      import('./pages/view/view.module').then((m) => m.ViewModule),canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),canActivate: [AuthGuard]
  },
  {
    path: 'user-chat',
    loadChildren: () =>
      import('./pages/user-chat/user-chat.module').then(
        (m) => m.UserChatModule
      ),
  },
  {
    path: 'tiles',
    loadChildren: () =>
      import('./pages/tiles/tiles.module').then((m) => m.TilesModule),canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
