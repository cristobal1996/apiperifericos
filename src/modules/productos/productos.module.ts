// src/productos/producto.module.ts
import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Categoria } from '../categorias/entities/categoria.entity';
import { AuthModule } from '../auth/auth.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto, Categoria]),
    AuthModule, 
  ],
  exports: [TypeOrmModule],
  providers: [ProductosService],
  controllers: [ProductosController],
})
export class ProductoModule {}


