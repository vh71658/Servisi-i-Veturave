import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { VeturaService } from '../../../core/services/vetura.service';
import { Vetura } from '../../../core/models/vetura.model';

@Component({
  selector: 'app-vetura-detail',
  standalone: true,
  imports: [RouterLink, CardModule, ButtonModule],
  templateUrl: './vetura-detail.component.html',
  styleUrl: './vetura-detail.component.scss',
})
export class VeturaDetailComponent implements OnInit {
  private veturaService = inject(VeturaService);
  @Input() id!: string;
  vetura?: Vetura;
  notFound = false;

  ngOnInit(): void {
    this.veturaService.getById(Number(this.id)).subscribe({
      next: v => this.vetura = v,
      error: () => this.notFound = true,
    });
  }
}
