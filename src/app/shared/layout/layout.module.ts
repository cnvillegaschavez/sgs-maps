import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppLayoutsComponent } from './app-layouts/app-layouts.component';
import { MainLayoutComponent } from './app-layouts/main-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [HeaderComponent, FooterComponent, AppLayoutsComponent, MainLayoutComponent],
  exports: [AppLayoutsComponent, MainLayoutComponent]
})
export class LayoutModule { }
