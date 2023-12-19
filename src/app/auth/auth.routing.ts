import { Routes } from '@angular/router';

export default [
  {
    path: 'login',
    loadComponent: async () => import('./pages/login/login.component'),
  },
  {
    path: 'signin',
    loadComponent: async () => import('./pages/signin/signin.component'),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
] as Routes;
