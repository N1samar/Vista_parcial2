import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { routesAdmin } from './pages/admin/admin.routes';
import { LayoutComponent } from './pages/admin/layout.component';
import { routesAuth } from './pages/auth/auth.routes';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => AuthComponent,
    loadChildren: () => routesAuth,
  },
  {
    path: 'admin',
    loadComponent: () => LayoutComponent,
    loadChildren: () => routesAdmin,
  },
  {
    path: 'not-found',
    loadComponent: () => NotFoundComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
