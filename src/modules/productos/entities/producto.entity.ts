import { Categoria } from "src/modules/categorias/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: ' Productos'})

export class Producto {
    
@PrimaryGeneratedColumn('uuid')
cod: string;

@Column('text', {
    unique: true,
})
nombre: string;

@Column('numeric', {
    default: 0
})
precio: number;

@Column({
    type:'text',
    nullable: true
})
descripcion: string;

@Column({
    type: 'int',
    default: 0
})
stock: number;


@Column('text', {
    array: true
})
tamaño: string[];

@ManyToOne(() => Categoria, (categoria) => categoria.Producto, {
    cascade: true,
  })
  categoria: Categoria;
}
