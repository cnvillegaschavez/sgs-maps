import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRouting } from './admin.routing';
import { LayoutModule } from './../shared/layout/layout.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRouting,
    LayoutModule,
    SharedModule
  ],
  declarations: [AdminComponent],
  providers: []
})
export class AdminModule { }
