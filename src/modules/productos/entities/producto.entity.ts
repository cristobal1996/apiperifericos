import { CarritoProducto } from "src/modules/carritoproducto/entities/carritoproducto.entity";
import { Categoria } from "src/modules/categorias/entities/categoria.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  nombre: string;

  @Column('numeric', { default: 0 })
  precio: number;

  @Column('text', { nullable: true })
  descripcion: string;

  @Column('int', { default: 0 })
  stock: number;

  @Column('text', { nullable: true })
  tamaño: string;

  @Column('text', { nullable: true })
  imagen: string; 

  @ManyToOne(() => Categoria, categoria => categoria.productos, {
    cascade: true,
    eager: true,
  })
  categoria: Categoria;

  @OneToMany(() => CarritoProducto, cp => cp.producto)
  carritoProductos: CarritoProducto[];
}


