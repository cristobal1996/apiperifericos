import { Producto } from "src/modules/productos/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({
    name: 'Categoria',
  })
export class Categoria {
@PrimaryColumn()
cod: string;

@Column('text', { unique: true })
nombre: string;

@Column('text')
descripcion: string;

@OneToMany(() => Producto, (Producto) => Producto.categoria, { cascade: false })
Producto?: Producto[];

}
