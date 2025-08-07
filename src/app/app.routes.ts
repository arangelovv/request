import { Routes } from '@angular/router';
import { WelcomePageComponent } from './features/welcome-page/welcome-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/welcome-page/welcome-page.component').then(
        (c) => c.WelcomePageComponent
      ),
  },
];
