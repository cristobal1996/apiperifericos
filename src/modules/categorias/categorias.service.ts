import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async create(dto: CreateCategoriaDto): Promise<Categoria> {
    const categoria = this.categoriaRepository.create(dto);
    return await this.categoriaRepository.save(categoria);
  }

  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();
  }

  async findAllWithProductos(): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      relations: ['productos'],
    });
  }

  async findOne(cod: string): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({ where: { cod } });
    if (!categoria) throw new NotFoundException(`Categoría con código ${cod} no encontrada.`);
    return categoria;
  }

  async update(cod: string, dto: UpdateCategoriaDto): Promise<Categoria> {
    const categoria = await this.findOne(cod);
    Object.assign(categoria, dto);
    return await this.categoriaRepository.save(categoria);
  }

  async remove(cod: string): Promise<void> {
    const categoria = await this.findOne(cod);
    await this.categoriaRepository.remove(categoria);
  }
}
