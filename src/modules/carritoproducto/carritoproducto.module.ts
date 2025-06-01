import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarritoProducto } from './entities/carritoproducto.entity';
import { CarritoProductoService } from './carritoproducto.service';
import { CarritoProductoController } from './carritoproducto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CarritoProducto])],
  controllers: [CarritoProductoController],
  providers: [CarritoProductoService],
  exports: [CarritoProductoService],
})
export class CarritoProductoModule {}
