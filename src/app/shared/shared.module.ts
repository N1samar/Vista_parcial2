import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    BottomNavbarComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  exports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    NgClass,
    NgIf,
    BottomNavbarComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
