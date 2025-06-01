import { IsUUID, IsInt, IsNumber, Min } from 'class-validator';

export class CreateCarritoProductoDto {
  @IsUUID()
  carritoId: string;

  @IsUUID()
  productoId: string;

  @IsInt()
  @Min(1)
  cantidad: number;

  @IsNumber()
  precio: number;
}


