import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
   {
    path: 'login',
    loadComponent : () => import ('./pages/auth/login/login.component').then(m => m.LoginComponent) // Lazy loading the LoginComponent
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register/register.component').then(m => m.RegisterComponent) // Lazy loading the RegisterComponent
  },
  {
    path: 'layout',
    loadChildren: () => import('./pages/layout/layout.routes').then(m => m.privateRoutes) // Lazy loading the private routes
  }
];
