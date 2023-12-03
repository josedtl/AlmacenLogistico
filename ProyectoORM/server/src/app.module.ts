import { Module } from '@nestjs/common';
import { CategoriaModule } from './Modules/Categoria.module';
import { TipoProductoModule } from './Modules/TipoProducto.module';
import { MarcaModule } from './Modules/Marca.module';
import { ModeloModule } from './Modules/Modelo.module';
import { PersonaModule } from './Modules/Entidad.module';
import { ListaRelacionModule } from './Modules/ListaRelacion.module';
import { ProductoModule } from './Modules/Producto.module';
import { GeneralModule } from './Modules/General.module';
@Module({
  imports: [CategoriaModule, PersonaModule, ListaRelacionModule, TipoProductoModule, MarcaModule, ModeloModule, ProductoModule,GeneralModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
