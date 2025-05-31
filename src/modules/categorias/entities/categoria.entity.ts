import { Producto } from "src/modules/productos/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity('categoria')
export class Categoria {
  @PrimaryColumn()
  cod: string; // Lo mantienes manual si así lo deseas

  @Column('text', { unique: true })
  nombre: string;

  @Column('text')
  descripcion: string;

  @OneToMany(() => Producto, producto => producto.categoria)
  productos: Producto[];
}
