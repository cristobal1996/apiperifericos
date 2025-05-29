import { Rol } from '../entities/usuario.entity';

export class CreateUsuarioDto {
  email: string;
  nombre: string;
  password: string;
  rol?: Rol;
}

