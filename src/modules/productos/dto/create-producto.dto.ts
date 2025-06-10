import { IsString,IsNotEmpty,IsNumber,Length,IsOptional, } from 'class-validator';

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

  @IsString()
  @IsOptional()
  imagen?: string; 
}


