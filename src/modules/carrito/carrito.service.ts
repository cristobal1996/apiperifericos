import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from './entities/carrito.entity';
import { UpdateCarritoDto, AccionProducto } from './dto/update-carrito.dto';
import { CarritoProducto } from '../carritoproducto/entities/carritoproducto.entity';
import { Producto } from '../productos/entities/producto.entity';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito)
    private readonly carritoRepository: Repository<Carrito>,

    @InjectRepository(CarritoProducto)
    private readonly carritoProductoRepository: Repository<CarritoProducto>,

    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async update(id: string, dto: UpdateCarritoDto): Promise<Carrito> {
    const carrito = await this.carritoRepository.findOne({
      where: { id },
      relations: ['productos'],
    });

    if (!carrito) throw new NotFoundException('Carrito no encontrado');

    if (dto.usuarioId) {
      carrito.usuarioId = dto.usuarioId;
    }

    if (dto.productos && dto.productos.length > 0) {
      for (const p of dto.productos) {
        const producto = await this.productoRepository.findOne({
          where: { id: p.productoId },
        });

        if (!producto) continue;

        const existente = carrito.productos.find(cp => cp.producto.id === p.productoId);

        switch (p.accion) {
          case AccionProducto.AGREGAR:
            if (!existente) {
              const nuevo = this.carritoProductoRepository.create({
                carrito,
                producto,
                cantidad: p.cantidad ?? 1,
                precio: producto.precio,
              });
              carrito.productos.push(nuevo);
            }
            break;

          case AccionProducto.ELIMINAR:
            if (existente) {
              await this.carritoProductoRepository.remove(existente);
              carrito.productos = carrito.productos.filter(cp => cp.id !== existente.id);
            }
            break;

          case AccionProducto.ACTUALIZAR:
            if (existente && p.cantidad && p.cantidad > 0) {
              existente.cantidad = p.cantidad;
              existente.precio = producto.precio;
              await this.carritoProductoRepository.save(existente);
            }
            break;
        }
      }
    }

    return this.carritoRepository.save(carrito);
  }
}

