import { CarritoProducto } from "src/modules/carritoproducto/entities/carritoproducto.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Carritos')
export class Carrito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  usuarioId: string;

  @OneToMany(() => CarritoProducto, cp => cp.carrito, { cascade: true, eager: true })
  productos: CarritoProducto[];

  @CreateDateColumn()
  creadoEn: Date;

  @UpdateDateColumn()
  actualizadoEn: Date;
}

