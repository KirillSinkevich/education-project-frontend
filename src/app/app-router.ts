import { Routes } from '@angular/router';
import {authGuard} from "./core/guards";

export const appRoutes: Routes = [
  // {
    // path: 'unavailable',
    // loadChildren: () =>
    //   import('@unavailable/feature/unavailable-shell/unavailable-shell-routing'),
  // },
  {
    path: 'auth',
    loadChildren: async () => import('./auth/auth.routing'),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: async () => import('./main/main.routing'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
