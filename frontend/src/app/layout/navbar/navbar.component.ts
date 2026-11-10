import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items: MenuItem[] = [
    { label: 'Ballina', icon: 'pi pi-home', routerLink: '/home' },
    { label: 'Veturat', icon: 'pi pi-car', items: [
      { label: 'Lista e veturave', icon: 'pi pi-list', routerLink: '/veturat' },
      { label: 'Shto veture', icon: 'pi pi-plus', routerLink: '/veturat/shto' },
    ] },
    { label: 'Klientet', icon: 'pi pi-users', routerLink: '/klientet' },
    { label: 'Sherbimet', icon: 'pi pi-wrench', routerLink: '/sherbimet' },
  ];
}
