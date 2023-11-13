import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { DashnoardComponent } from './dashnoard/dashnoard.component';
import { TablesComponent } from './tables/tables.component';

export const routesAdmin: Routes = [
  {
    path: 'task',
    loadComponent: () => TaskComponent,
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
