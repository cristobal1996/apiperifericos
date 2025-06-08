import { IsString, IsNotEmpty, IsNumber, IsArray } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsNumber()
  precio: number;

  @IsNumber()
  stock: number;

  @IsArray()
  @IsString({ each: true })
  tamaño: string[];

  @IsString()
  categoriaCod: string;
}

