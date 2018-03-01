import { Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: '',
    loadChildren: './components/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'exemple',
    loadChildren: './components/exemple/exemple.module#ExempleModule'
  },
  {
    path: 'facturation',
    loadChildren: './components/facturation/dashboard.module#DashboardModule'
  },
  {
    path: 'stock',
    loadChildren: './components/stock/dashboard.module#DashboardModule'
  },
  {
    path: 'gestionStock',
    loadChildren: './components/EnterStock/dashboard.module#DashboardModule'
  }

]
}];
