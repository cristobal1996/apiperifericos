import {  } from "class-validator";
export class CreateProductoDto {
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  tamaño: string[];
  categoriaCod: string;
}

