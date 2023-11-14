import { Routes } from '@angular/router';
import { UpComponent } from './up/up.component';
import { DashnoardComponent } from './dashnoard/dashnoard.component';
import { TablesComponent } from './tables/tables.component';

export const routesAdmin: Routes = [
  {
    path: 'up',
    loadComponent: () => UpComponent,
  },
  {
    path: 'tables',
    loadComponent: () => TablesComponent,
  },
  {
    path: 'dashboard',
    loadComponent: () => DashnoardComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];
