
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MapsComponent } from './maps.component';
import { MapsRouting } from './maps.routing';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MapsRouting
  ],
  providers: [
  ],
  declarations: [MapsComponent]
})
export class MapsModule { }

