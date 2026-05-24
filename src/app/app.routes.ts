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
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: 'workshops',
    loadComponent: () => import('./pages/workshops/workshops.component').then(m => m.WorkshopsComponent)
  },
  {
    path: 'collection',
    loadComponent: () => import('./pages/collection/collection.component').then(m => m.CollectionComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];



