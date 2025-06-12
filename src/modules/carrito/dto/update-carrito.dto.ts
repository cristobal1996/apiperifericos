import {
  IsUUID,
  IsOptional,
  ValidateNested,
  IsArray,
  IsEnum,
  IsInt,
  Min,
  ValidateIf,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum AccionProducto {
  AGREGAR = 'agregar',
  ELIMINAR = 'eliminar',
  ACTUALIZAR = 'actualizar',
}

class ProductoCarritoDto {
  @IsUUID()
  productoId: string;

  @IsEnum(AccionProducto)
  accion: AccionProducto;

  @ValidateIf((o) => o.accion !== AccionProducto.ELIMINAR)
  @IsInt()
  @Min(1)
  cantidad?: number;
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




