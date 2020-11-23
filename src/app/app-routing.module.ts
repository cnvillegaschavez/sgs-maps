import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(a => a.UserModule)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  }
];


export const AppRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);