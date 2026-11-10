import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'veturat', loadChildren: () => import('./features/veturat/veturat.routes').then(m => m.VETURAT_ROUTES) },
  { path: 'klientet', loadChildren: () => import('./features/klientet/klientet.routes').then(m => m.KLIENTET_ROUTES) },
  { path: 'sherbimet', loadChildren: () => import('./features/sherbimet/sherbimet.routes').then(m => m.SHERBIMET_ROUTES) },
  { path: '**', loadComponent: () => import('./shared/not-found/not-found.component').then(m => m.NotFoundComponent) },
];
