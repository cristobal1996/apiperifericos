import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarritoproductoService } from './carritoproducto.service';
import { CreateCarritoproductoDto } from './dto/create-carritoproducto.dto';
import { UpdateCarritoproductoDto } from './dto/update-carritoproducto.dto';

@Controller('carritoproducto')
export class CarritoproductoController {
  constructor(private readonly carritoproductoService: CarritoproductoService) {}

  @Post()
  create(@Body() createCarritoproductoDto: CreateCarritoproductoDto) {
    return this.carritoproductoService.create(createCarritoproductoDto);
  }

  @Get()
  findAll() {
    return this.carritoproductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carritoproductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarritoproductoDto: UpdateCarritoproductoDto) {
    return this.carritoproductoService.update(+id, updateCarritoproductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carritoproductoService.remove(+id);
  }
}
