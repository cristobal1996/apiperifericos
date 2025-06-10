import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarritoService } from './carrito.service';
import { CarritoController } from './carrito.controller';
import { Carrito } from './entities/carrito.entity';
import { CarritoProducto } from '../carritoproducto/entities/carritoproducto.entity';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { ProductoModule } from '../productos/productos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Carrito, CarritoProducto]),
    ProductoModule,  
  ],
  providers: [CarritoService],
  controllers: [CarritoController],
})
export class CarritoModule {}


