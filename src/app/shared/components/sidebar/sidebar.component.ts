import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../core/services/menu.service';
import { RouterLink } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgClass, NgIf } from '@angular/common';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    AngularSvgIconModule,
    SidebarMenuComponent,
    RouterLink,
  ],
})
export class SidebarComponent implements OnInit {
  constructor(
    public themeService: ThemeService,
    public menuService: MenuService
  ) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }
}
