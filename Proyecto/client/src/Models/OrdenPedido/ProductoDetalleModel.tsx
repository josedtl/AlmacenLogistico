export class ProductoDetalleModel {
    OrdenPedidoDetalleId: number;
    OrdenPedidoId: number;
    ProductoId: number;
    UnidadMedidaId: number;
    CantidadSolicitado: number;
    CantidadReservado?: number | null;
    CantidadFaltante: number;
    CantidadAtendido: number;
    Enlazado: boolean;
    EsAtendido: boolean;
    FechaRegistro: Date;
    CodUsuario: string;
    EstadoRegistro?: boolean | null;
    Action: number;
    constructor() {

       this.OrdenPedidoDetalleId = 0;
       this.OrdenPedidoId = 0;
       this.ProductoId = 0;
       this.UnidadMedidaId = 0;
       this.CantidadSolicitado = 0;
       this.CantidadFaltante = 0;
       this.CantidadAtendido = 0;
       this.Enlazado = false;
       this.EsAtendido = false;
       this.FechaRegistro  = new Date();
       this.CodUsuario = "";
       this.CantidadReservado = 0,
       this.EstadoRegistro = false;
       this.Action = 0;
    }
}

export default ProductoDetalleModel;