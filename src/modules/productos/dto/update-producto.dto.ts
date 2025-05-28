import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';

export class UpdateProductoDto {
  nombre?: string;
  descripcion?: string;
  precio?: number;
  stock?: number;
  tamaño?: string[];
  categoriaCod?: string;
}
