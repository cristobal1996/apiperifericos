import {
  Controller,
  Patch,
  Param,
  Body,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { Carrito } from './entities/carrito.entity';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { RolesGuard } from 'src/modules/auth/roles.guard';
import { Roles } from 'src/modules/auth/roles.decorator';

@Controller('carritos')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Patch(':id')
  @Roles('admin', 'user')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCarritoDto,
  ): Promise<Carrito> {
    return this.carritoService.update(id, dto);
  }
}


