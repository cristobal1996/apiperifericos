import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
  ) {}

  async create(dto: CreateProductoDto) {
    const producto = this.productoRepo.create(dto);
    return await this.productoRepo.save(producto);
  }

  async findAll() {
    return await this.productoRepo.find();
  }

  async findOne(id: string) {
    const producto = await this.productoRepo.findOneBy({ id });
    if (!producto) {
      throw new NotFoundException(`Producto con ID "${id}" no encontrado`);
    }
    return producto;
  }

  async update(id: string, dto: UpdateProductoDto) {
    const producto = await this.productoRepo.preload({
      id,
      ...dto,
    });

    if (!producto) {
      throw new NotFoundException(`Producto con ID "${id}" no encontrado`);
    }

    return await this.productoRepo.save(producto);
  }

  async remove(id: string) {
    const producto = await this.findOne(id);
    return await this.productoRepo.remove(producto);
  }
}

