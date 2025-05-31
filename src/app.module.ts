import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductoModule } from './modules/productos/productos.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { CarritoModule } from './modules/carrito/carrito.module';
import { CarritoproductoModule } from './modules/carritoproducto/carritoproducto.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      schema: process.env.DB_SCHEMA || 'public',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductoModule,
    CategoriasModule,
    AuthModule,
    UsuariosModule,
    CarritoModule,
    CarritoproductoModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
