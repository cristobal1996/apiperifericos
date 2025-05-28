import { forwardRef, Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), forwardRef(() => AuthModule)],
  providers: [UsuariosService],
  controllers: [UsuariosController],
  exports: [UsuariosService],
})
export class UsuariosModule {}

// usuarios/usuarios.controller.ts
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles('admin')
@Patch(':id')
updateUsuario(@Param('id') id: string, @Body() dto: UpdateUsuarioDto) {
  return this.usuarioService.update(id, dto);
}

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles('admin')
@Delete(':id')
removeUsuario(@Param('id') id: string) {
  return this.usuarioService.remove(id);
}
