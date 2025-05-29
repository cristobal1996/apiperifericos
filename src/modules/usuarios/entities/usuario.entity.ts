import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Rol {
  USUARIO = 'usuario',
  ADMIN = 'admin',
}

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text')
  nombre: string;

  @Column('text')
  password: string;

  @Column({ type: 'enum', enum: Rol, default: Rol.USUARIO })
  rol: Rol;
}





