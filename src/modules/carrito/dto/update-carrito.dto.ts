// src/modules/carrito/dto/update-carrito.dto.ts
import {
  IsUUID,
  IsOptional,
  ValidateNested,
  IsArray,
  IsEnum,
  IsInt,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

class ProductoCarritoDto {
  @IsUUID()
  productoId: string;

  @IsEnum(['agregar', 'eliminar', 'actualizar'])
  accion: 'agregar' | 'eliminar' | 'actualizar';

  @IsOptional()
  @IsInt()
  @Min(1)
  cantidad?: number;
}

export enum AccionProducto {
  AGREGAR = 'agregar',
  ELIMINAR = 'eliminar',
  ACTUALIZAR = 'actualizar',
}


export class UpdateCarritoDto {
  @IsOptional()
  @IsUUID()
  usuarioId?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductoCarritoDto)
  productos?: ProductoCarritoDto[];
}


