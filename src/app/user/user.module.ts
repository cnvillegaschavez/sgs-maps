import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from './services';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    SharedModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [],
  providers: [UserService]

})
export class UserModule { }
