import {Routes} from "@angular/router";

export default [
  {
    path: '',
    loadComponent: async () => import('./main.component'),
    children: [
      {
        path: '',
        loadComponent: async () => import('../dashboard/dashboard.component'),
      },
      {
        path: 'users',
        loadComponent: async () => import('../users/users.component'),
      },
      {
        path: 'schedule',
        loadComponent: async () => import('../schedule/schedule.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
] as Routes;
