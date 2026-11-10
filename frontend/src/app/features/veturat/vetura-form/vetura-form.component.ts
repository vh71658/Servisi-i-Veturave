import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { VeturaService } from '../../../core/services/vetura.service';
import { CreateVeturaDto } from '../../../core/models/vetura.model';

@Component({
  selector: 'app-vetura-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputTextModule, ButtonModule, MessageModule],
  templateUrl: './vetura-form.component.html',
  styleUrl: './vetura-form.component.scss',
})
export class VeturaFormComponent {
  private fb = inject(FormBuilder);
  private veturaService = inject(VeturaService);
  private router = inject(Router);
  saving = false;
  errorMessage = '';
  form = this.fb.nonNullable.group({
    marka: ['', Validators.required],
    modeli: ['', Validators.required],
    targa: ['', Validators.required],
  });

  ruaj(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving = true;
    const dto: CreateVeturaDto = this.form.getRawValue();
    this.veturaService.create(dto).subscribe({
      next: () => this.router.navigate(['/veturat']),
      error: err => {
        this.saving = false;
        this.errorMessage = err?.error?.message ?? 'Ruajtja deshtoi';
      },
    });
  }

  invalid(field: 'marka' | 'modeli' | 'targa'): boolean {
    const control = this.form.controls[field];
    return control.invalid && control.touched;
  }
}
