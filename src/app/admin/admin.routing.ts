import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './../core/services';


const routes: Routes = [{
  path: '',
  component: AdminComponent,
  canActivate: [AuthGuard],
  data: { moduleCode: ['code'] },
  children: [
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module').then(a => a.MapsModule),
      canActivate: [AuthGuard],
      data: { moduleCode: ['code'] }
    }]
}];

export const AdminRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
