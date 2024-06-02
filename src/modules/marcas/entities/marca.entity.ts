import { Producto } from "src/modules/productos/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({
    name: 'Marcas',
  })
export class Marca {
@PrimaryColumn()
cod: string;

@Column('text', { unique: true })
nombre: string;

@Column('text')
descripcion: string;

@Column('text')
telefono: string;

@Column('text')
sitioweb: string;

@OneToMany(() => Producto, (Producto) => Producto.marca, { cascade: false })
Producto?: Producto[];
}
