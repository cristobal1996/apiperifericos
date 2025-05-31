import { IsUUID, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCarritoProductoDto {
  @IsUUID()
  productoId: string;

  @IsUUID()
  carritoId: string;

  cantidad: number;
}

export class CreateCarritoDto {
  @IsUUID()
  usuarioId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCarritoProductoDto)
  productos: CreateCarritoProductoDto[];
}

