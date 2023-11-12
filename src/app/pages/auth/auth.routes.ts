import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routesAuth: Routes = [
  {
    path: 'login',
    loadComponent: () => LoginComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];
