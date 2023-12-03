import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'

export class OrdenPedidoDetalleEntity {
    Cont: number = 0;
    OrdenPedidoDetalleId: number;
    OrdenPedidoId: number;
    ProductoId: number;
    UnidadMedidaId: number;
    CantidadSolicitado: number;
    CantidadReservado: number;
    CantidadFaltante: number;
    CantidadAtendido: number;
    Enlazado: boolean;
    EsAtendido: boolean;
    FechaRegistro: Date;
    CodUsuario: string;
    EstadoRegistro: boolean;
    Action: ProcessActionEnum;
    NomProducto: string;
    CategoriaId: number
    CodigoUM: string;
    Stock: number;
    key: string;
    constructor() {
        this.Cont = 0;
        this.OrdenPedidoDetalleId = 0;
        this.OrdenPedidoId = 0;
        this.ProductoId = 0;
        this.UnidadMedidaId = 0;
        this.CantidadSolicitado = 0;
        this.CantidadReservado = 0;
        this.CantidadFaltante = 0;
        this.CantidadAtendido = 0;
        this.Enlazado = false;
        this.EsAtendido = false;
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.EstadoRegistro = false;
        this.Action = ProcessActionEnum.Add;
        this.NomProducto = '';
        this.CategoriaId = 0;
        this.CodigoUM = '';
        this.Stock = 0;
        this.key = '';
        // Asigna el valor predeterminado de ProcessActionEnum que desees
    }
}


