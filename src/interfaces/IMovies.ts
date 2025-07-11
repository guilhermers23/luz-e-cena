export type Categoria = "2D" | "3D";
export type FaixaEtaria =
  | "Livre"
  | "10 anos"
  | "12 anos"
  | "14 anos"
  | "16 anos"
  | "18 anos";

export interface IMovie {
  id: number;
  src: string;
  alt: string;
  titulo: string;
  categoria: Categoria;
  faixaEtaria: FaixaEtaria;
  genero: string;
  duracao: number;
}
