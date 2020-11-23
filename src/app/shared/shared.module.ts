import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    LoaderComponent,
  ],
  exports: [
    CommonModule,
    RouterModule,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
