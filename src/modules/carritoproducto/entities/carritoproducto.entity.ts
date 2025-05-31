import { Carrito } from "src/modules/carrito/entities/carrito.entity";
import { Producto } from "src/modules/productos/entities/producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('carrito_productos')
export class CarritoProducto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Carrito, carrito => carrito.productos)
  carrito: Carrito;

  @ManyToOne(() => Producto, producto => producto.carritoProductos)
  producto: Producto;

  @Column('int')
  cantidad: number;

  @Column('numeric')
  precio: number;
}


