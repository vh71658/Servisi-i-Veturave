import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CardModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  modulet = [
    { titulli: 'Veturat', ikona: 'pi pi-car', link: '/veturat', pershkrimi: 'Lista dhe regjistrimi i veturave' },
    { titulli: 'Klientet', ikona: 'pi pi-users', link: '/klientet', pershkrimi: 'Do te realizohet me vone' },
    { titulli: 'Sherbimet', ikona: 'pi pi-wrench', link: '/sherbimet', pershkrimi: 'Do te realizohet me vone' },
  ];
}
