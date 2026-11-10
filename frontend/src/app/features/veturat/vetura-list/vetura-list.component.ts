import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { VeturaService } from '../../../core/services/vetura.service';
import { Vetura } from '../../../core/models/vetura.model';

@Component({
  selector: 'app-vetura-list',
  standalone: true,
  imports: [RouterLink, TableModule, ButtonModule, ToastModule, ConfirmDialogModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './vetura-list.component.html',
  styleUrl: './vetura-list.component.scss',
})
export class VeturaListComponent implements OnInit {
  private veturaService = inject(VeturaService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  veturat: Vetura[] = [];
  loading = false;

  ngOnInit(): void { this.ngarkoVeturat(); }

  ngarkoVeturat(): void {
    this.loading = true;
    this.veturaService.getAll().subscribe({
      next: data => { this.veturat = data; this.loading = false; },
      error: () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Gabim', detail: 'Nuk u lidh me backend-in' });
      },
    });
  }

  fshi(vetura: Vetura): void {
    this.confirmationService.confirm({
      header: 'Konfirmo fshirjen',
      message: `A deshironi ta fshini ${vetura.marka} ${vetura.modeli}?`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Po', rejectLabel: 'Jo',
      accept: () => {
        this.veturaService.delete(vetura.id).subscribe({
          next: () => {
            this.veturat = this.veturat.filter(v => v.id !== vetura.id);
            this.messageService.add({ severity: 'success', summary: 'U fshi', detail: 'Vetura u fshi me sukses' });
          },
          error: () => this.messageService.add({ severity: 'error', summary: 'Gabim', detail: 'Fshirja deshtoi' }),
        });
      },
    });
  }
}
