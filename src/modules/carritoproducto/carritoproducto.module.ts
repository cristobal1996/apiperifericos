import { Module } from '@nestjs/common';
import { CarritoproductoService } from './carritoproducto.service';
import { CarritoproductoController } from './carritoproducto.controller';

@Module({
  controllers: [CarritoproductoController],
  providers: [CarritoproductoService],
})
export class CarritoproductoModule {}
