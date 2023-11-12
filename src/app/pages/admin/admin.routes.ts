import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { OperatorComponent } from './operator/operator.component';
import { DashnoardComponent } from './dashnoard/dashnoard.component';

export const routesAdmin: Routes = [
  {
    path: 'task',
    loadComponent: () => TaskComponent,
  },
  {
    path: 'operator',
    loadComponent: () => OperatorComponent,
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
