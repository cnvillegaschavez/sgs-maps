import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
];


export const UserRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
