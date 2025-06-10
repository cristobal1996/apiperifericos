import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Categoria } from '../categorias/entities/categoria.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,

    @InjectRepository(Categoria)
    private readonly categoriaRepo: Repository<Categoria>,
  ) {}

  async create(dto: CreateProductoDto) {
    const categoria = await this.categoriaRepo.findOneBy({ cod: dto.categoriaCod });
    if (!categoria) {
      throw new NotFoundException(`Categoría con código ${dto.categoriaCod} no encontrada`);
    }

    const producto = this.productoRepo.create({
      ...dto,
      categoria,
    });

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
    const producto = await this.findOne(id);

    if (dto.categoriaCod) {
      const categoria = await this.categoriaRepo.findOneBy({ cod: dto.categoriaCod });
      if (!categoria) {
        throw new NotFoundException(`Categoría con código ${dto.categoriaCod} no encontrada`);
      }
      producto.categoria = categoria;
    }

    Object.assign(producto, dto);
    return await this.productoRepo.save(producto);
  }

  async remove(id: string) {
    const producto = await this.findOne(id);
    return await this.productoRepo.remove(producto);
  }
}


