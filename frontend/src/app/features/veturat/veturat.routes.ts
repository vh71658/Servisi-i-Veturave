import { Routes } from '@angular/router';

export const VETURAT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./vetura-list/vetura-list.component').then(m => m.VeturaListComponent),
  },
  {
    path: 'shto',
    loadComponent: () => import('./vetura-form/vetura-form.component').then(m => m.VeturaFormComponent),
  },
  {
    path: ':id',
    loadComponent: () => import('./vetura-detail/vetura-detail.component').then(m => m.VeturaDetailComponent),
  },
];
