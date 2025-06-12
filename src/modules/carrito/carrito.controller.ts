import {
  Controller,
  Patch,
  Param,
  Body,
  ParseUUIDPipe,
  UseGuards,
  Get,
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

  @Get(':usuarioId')
  @Roles('usuario', 'admin')
  async findByUsuario(@Param('usuarioId', ParseUUIDPipe) usuarioId: string): Promise<Carrito> {
    return this.carritoService.findByUsuarioId(usuarioId);
  }

  @Patch(':id')
  @Roles('admin', 'usuario')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCarritoDto,
  ): Promise<Carrito> {
    return this.carritoService.update(id, dto);
  }
}



