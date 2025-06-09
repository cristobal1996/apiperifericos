import { IsString, IsNotEmpty, IsNumber, IsArray, Length } from 'class-validator';

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

  @IsString()
  tamaño: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 10)
  categoriaCod: string;
}

