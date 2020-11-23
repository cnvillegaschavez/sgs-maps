import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreMaterialModule } from './material-module';
import { LoginComponent } from './user/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { UserService } from './user/services';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    CoreModule,
    CoreMaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
