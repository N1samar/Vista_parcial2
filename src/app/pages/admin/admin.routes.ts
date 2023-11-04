import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { OperatorComponent } from './operator/operator.component';

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
    path: '',
    pathMatch: 'full',
    redirectTo: 'task',
  },
];
