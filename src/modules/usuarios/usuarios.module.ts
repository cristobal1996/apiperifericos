import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuariosService } from './usuarios.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    forwardRef(() => AuthModule),
  ],
  providers: [UsuariosService],
  exports: [
    UsuariosService,
    TypeOrmModule, // 👈 Exporta TypeOrmModule para que la entidad esté disponible fuera
  ],
})
export class UsuariosModule {}


