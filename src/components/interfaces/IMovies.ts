import { Categoria, FaixaEtaria } from "../Tag";

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
