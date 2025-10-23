import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Home'
  },
  {
    path: 'bookOfChanges',
    loadComponent: () => import('./features/book-of-changes/book-of-changes.component').then(m => m.BookOfChangesComponent),
    title: 'Book of Changes'
  },
  {
    path: 'numerology',
    loadComponent: () => import('./features/numerology/numerology.component').then(m => m.NumerologyComponent),
    title: 'Numerology Calculator'
  },
  { path: '**', redirectTo: '' } // Redirect to home for any unknown routes
];
