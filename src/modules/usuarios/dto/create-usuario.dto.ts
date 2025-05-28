import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { Rol } from '../entities/usuario.entity';

export class CreateUsuarioDto {
  @IsEmail()
  email: string;

  @IsString()
  nombre: string;

  @MinLength(6)
  password: string;

  @IsOptional()
  @IsEnum(Rol)
  rol?: Rol;
}

