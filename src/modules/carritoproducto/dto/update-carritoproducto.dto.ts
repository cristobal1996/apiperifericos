import { PartialType } from '@nestjs/mapped-types';
import { CreateCarritoProductoDto } from './create-carritoproducto.dto';
import { IsOptional, IsInt, IsNumber, Min, IsUUID } from 'class-validator';

export class UpdateCarritoProductoDto extends PartialType(CreateCarritoProductoDto) {
  @IsOptional()
  @IsUUID()
  carritoId?: string;

  @IsOptional()
  @IsUUID()
  productoId?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  cantidad?: number;

  @IsOptional()
  @IsNumber()
  precio?: number;
}

