import { Carrito } from "src/modules/carrito/entities/carrito.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

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

  @OneToMany(() => Carrito, carrito => carrito.usuario)
  carritos: Carrito[];
}







