import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Carrito } from 'src/modules/carrito/entities/carrito.entity';

@Entity('Usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text')
  nombre: string;

  @Column('text')
  password: string;

  @Column('text', { default: 'usuario' })
  rol: string;

  @OneToMany(() => Carrito, carrito => carrito.usuario)
  carritos: Carrito[];
}


