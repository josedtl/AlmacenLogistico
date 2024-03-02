import { AccionEnum } from "../Lib/AccionEnum";


export class ProductoEntity {
    ProductoId: number;
    Codigo: string;
    CategoriaId: number;
    TipoProductoId: number;
    MarcaId: number;
    ModeloId: number;
    Nombre: string;
    Descripcion: string;
    UnidadMedidaId: number;
    Reserva: number;
    Stock: number;
    FechaRegistro: Date;
    CodUsuario: string;
    EstadoRegistro: boolean;
    Action: AccionEnum;
  }