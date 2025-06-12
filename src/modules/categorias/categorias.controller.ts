import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CategoriaService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { RolesGuard } from 'src/modules/auth/roles.guard';
import { Roles } from 'src/modules/auth/roles.decorator';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  // Solo admin puede crear
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  create(@Body() dto: CreateCategoriaDto) {
    return this.categoriaService.create(dto);
  }

  // Ruta pública
  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  // Ruta pública
  @Get('con-productos')
  findAllWithProductos() {
    return this.categoriaService.findAllWithProductos();
  }

  // Ruta pública
  @Get(':cod')
  findOne(@Param('cod') cod: string) {
    return this.categoriaService.findOne(cod);
  }

  // Solo admin puede actualizar
  @Patch(':cod')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  update(@Param('cod') cod: string, @Body() dto: UpdateCategoriaDto) {
    return this.categoriaService.update(cod, dto);
  }

  // Solo admin puede eliminar
  @Delete(':cod')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  remove(@Param('cod') cod: string) {
    return this.categoriaService.remove(cod);
  }
}

