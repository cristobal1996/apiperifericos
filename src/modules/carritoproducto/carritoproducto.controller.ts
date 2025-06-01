import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarritoProductoService } from './carritoproducto.service';
import { CreateCarritoProductoDto } from './dto/create-carritoproducto.dto';
import { UpdateCarritoProductoDto } from './dto/update-carritoproducto.dto';

@Controller('carrito-productos')
export class CarritoProductoController {
  constructor(private readonly service: CarritoProductoService) {}

  @Post()
  create(@Body() dto: CreateCarritoProductoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCarritoProductoDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

