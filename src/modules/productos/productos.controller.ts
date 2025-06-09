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
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}


  @Get()
  findAll() {
    return this.productosService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(id);
  }

 
  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  create(@Body() dto: CreateProductoDto) {
    return this.productosService.create(dto);
  }

  
  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  update(@Param('id') id: string, @Body() dto: UpdateProductoDto) {
    return this.productosService.update(id, dto);
  }

  
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.productosService.remove(id);
  }
}


