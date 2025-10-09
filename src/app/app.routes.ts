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
    path: 'feature2',
    loadComponent: () => import('./features/feature2/feature2.component').then(m => m.Feature2Component),
    title: 'Feature 2'
  },
  { path: '**', redirectTo: '' } // Redirect to home for any unknown routes
];
