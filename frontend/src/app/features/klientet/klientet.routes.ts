import { Routes } from '@angular/router';
export const KLIENTET_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./klient-list/klient-list.component').then(m => m.KlientListComponent) },
  { path: 'shto', loadComponent: () => import('./klient-form/klient-form.component').then(m => m.KlientFormComponent) },
];
