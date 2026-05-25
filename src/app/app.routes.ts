import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'bio',
    loadComponent: () => import('./pages/bio/bio.component').then(m => m.BioComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];



