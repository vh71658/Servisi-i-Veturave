import { Routes } from '@angular/router';
export const SHERBIMET_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./sherbim-list/sherbim-list.component').then(m => m.SherbimListComponent) },
  { path: ':id', loadComponent: () => import('./sherbim-detail/sherbim-detail.component').then(m => m.SherbimDetailComponent) },
];
