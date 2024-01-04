import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.component'),
  },
  {
    path: 'test',
    loadComponent: () => import('./pages/test/test.component'),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
