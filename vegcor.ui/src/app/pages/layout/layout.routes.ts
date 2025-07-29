import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

export const privateRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('../dashboard/dashboard.component').then(m => m.DashboardComponent) // Lazy loading the DashboardComponent
      }
    ]
  }
]