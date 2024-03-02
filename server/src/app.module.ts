import { Module } from '@nestjs/common';
import { CategoriaModule } from './Modules/Categoria.module';
import { TipoProductoModule } from './Modules/TipoProducto.module';
import { MarcaModule } from './Modules/Marca.module';
import { ModeloModule } from './Modules/Modelo.module';
import { PersonaModule } from './Modules/Entidad.module';
import { ListaRelacionModule } from './Modules/ListaRelacion.module';
import { ProductoModule } from './Modules/Producto.module';
import { GeneralModule } from './Modules/General.module';
import { EntidadEmpresa } from './Modules/EntidadEmpresa.module';
@Module({
  imports: [CategoriaModule, PersonaModule, ListaRelacionModule, TipoProductoModule, MarcaModule, ModeloModule, ProductoModule,GeneralModule,EntidadEmpresa],
  controllers: [],
  providers: [],
})
export class AppModule { }
