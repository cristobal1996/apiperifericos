import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  create(@Body() dto: CreateCategoriaDto) {
    return this.categoriaService.create(dto);
  }

  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get('con-productos')
  findAllWithProductos() {
    return this.categoriaService.findAllWithProductos();
  }

  @Get(':cod')
  findOne(@Param('cod') cod: string) {
    return this.categoriaService.findOne(cod);
  }

  @Patch(':cod')
  update(@Param('cod') cod: string, @Body() dto: UpdateCategoriaDto) {
    return this.categoriaService.update(cod, dto);
  }

  @Delete(':cod')
  remove(@Param('cod') cod: string) {
    return this.categoriaService.remove(cod);
  }
}
