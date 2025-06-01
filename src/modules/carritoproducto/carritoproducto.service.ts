import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarritoProducto } from './entities/carritoproducto.entity';
import { CreateCarritoProductoDto } from './dto/create-carritoproducto.dto';
import { UpdateCarritoProductoDto } from './dto/update-carritoproducto.dto';

@Injectable()
export class CarritoProductoService {
  constructor(
    @InjectRepository(CarritoProducto)
    private readonly carritoProductoRepository: Repository<CarritoProducto>,
  ) {}

  async create(createDto: CreateCarritoProductoDto): Promise<CarritoProducto> {
    const nuevo = this.carritoProductoRepository.create({
      ...createDto,
      carrito: { id: createDto.carritoId },
      producto: { id: createDto.productoId },
    });
    return this.carritoProductoRepository.save(nuevo);
  }

  async findAll(): Promise<CarritoProducto[]> {
    return this.carritoProductoRepository.find({
      relations: ['carrito', 'producto'],
    });
  }

  async findOne(id: string): Promise<CarritoProducto> {
    return this.carritoProductoRepository.findOne({
      where: { id },
      relations: ['carrito', 'producto'],
    });
  }

  async update(id: string, updateDto: UpdateCarritoProductoDto): Promise<CarritoProducto> {
    const actual = await this.carritoProductoRepository.findOneBy({ id });

    if (updateDto.carritoId) actual.carrito = { id: updateDto.carritoId } as any;
    if (updateDto.productoId) actual.producto = { id: updateDto.productoId } as any;
    if (updateDto.cantidad !== undefined) actual.cantidad = updateDto.cantidad;
    if (updateDto.precio !== undefined) actual.precio = updateDto.precio;

    return this.carritoProductoRepository.save(actual);
  }

  async remove(id: string): Promise<void> {
    await this.carritoProductoRepository.delete(id);
  }
}

