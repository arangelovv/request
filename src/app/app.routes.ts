import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/welcome-page/welcome-page.component').then(
        (c) => c.WelcomePageComponent
      ),
  },
  {
    path: 'create-collection',
    loadComponent: () =>
      import(
        './features/create-collection-page/create-collection-page.component'
      ).then((c) => c.CreateCollectionPageComponent),
  },
];
