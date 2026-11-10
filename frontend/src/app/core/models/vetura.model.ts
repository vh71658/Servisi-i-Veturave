export interface Vetura {
  id: number;
  marka: string;
  modeli: string;
  targa: string;
}

export type CreateVeturaDto = Omit<Vetura, 'id'>;
