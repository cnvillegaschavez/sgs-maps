import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from './services';
import { SharedModule } from './../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { UserRouting } from './user.routing';


@NgModule({
  declarations: [RegisterComponent],
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
    MatFormFieldModule,
    MatDividerModule,
    UserRouting
  ],
  exports: [],
  providers: [UserService]

})
export class UserModule { }
