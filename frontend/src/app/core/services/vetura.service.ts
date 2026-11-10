import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CreateVeturaDto, Vetura } from '../models/vetura.model';

@Injectable({ providedIn: 'root' })
export class VeturaService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/veturat`;

  getAll(): Observable<Vetura[]> {
    return this.http.get<Vetura[]>(this.baseUrl);
  }
  getById(id: number): Observable<Vetura> {
    return this.http.get<Vetura>(`${this.baseUrl}/${id}`);
  }
  create(vetura: CreateVeturaDto): Observable<Vetura> {
    return this.http.post<Vetura>(this.baseUrl, vetura);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
