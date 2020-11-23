import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MapsComponent } from './maps.component';


export const routes: Routes = [
  {
    path: '',
    component: MapsComponent
  },

];

export const MapsRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
