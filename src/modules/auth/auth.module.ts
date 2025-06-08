import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy'; 
import { AuthController } from './auth.controller'; 

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secretKey',
      signOptions: { expiresIn: '1d' },
    }),
    forwardRef(() => UsuariosModule),
  ],
  controllers: [AuthController], 
  providers: [AuthService, JwtStrategy, LocalStrategy], 
  exports: [AuthService, JwtModule, JwtStrategy],
})
export class AuthModule {}
