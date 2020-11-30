import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },

];

export const UserRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
