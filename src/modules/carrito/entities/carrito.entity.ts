import { CarritoProducto } from "src/modules/carritoproducto/entities/carritoproducto.entity";
import { Usuario } from "src/modules/usuarios/entities/usuario.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity('carritos')
export class Carrito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  usuarioId: string;

  @OneToMany(() => CarritoProducto, cp => cp.carrito, {
    cascade: true,
    eager: true,
  })
  productos: CarritoProducto[];

  @ManyToOne(() => Usuario, usuario => usuario.carritos)
  usuario: Usuario;

  @CreateDateColumn()
  creadoEn: Date;

  @UpdateDateColumn()
  actualizadoEn: Date;
}

