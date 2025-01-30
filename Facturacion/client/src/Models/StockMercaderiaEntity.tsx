
export class StockMercaderiaMainModel {

    MercaderiaId: number;
    Codigo: string;
    NomCategoria: string;
    NomTipoProducto: string;
    NomMarca: string;
    NomModelo: string;
    NomUnidadMedida: string;
    Stock: number;
    Reserva: number;

    constructor() {
        this.MercaderiaId = 0;
        this.Codigo = "";
        this.NomCategoria = "";
        this.NomTipoProducto = "";
        this.NomMarca = "";
        this.NomModelo = "";
        this.NomUnidadMedida = "";
        this.Stock = 0;
        this.Reserva = 0;
    }
}


// export class DespachoDetalleModel {
//     OrdenPedidoId: number;
//     OrdenPedidoDetalleId: number;
//     NomProducto: string;
//     CodigoUM: string;
//     CantidadSolicitado: number;
//     CantidadReservado: number;
//     CantidadAtendido: number;
//     Action: number
//     DespachoDetalleId: number;
//     DespachoId: number;
//     Cantidad: number;
//     DetalleReserva: DespachoReservaOPModel[]

//     constructor() {
//         this.OrdenPedidoId = 0;
//         this.OrdenPedidoDetalleId = 0;
//         this.NomProducto = "";
//         this.CodigoUM = "";
//         this.CantidadSolicitado = 0;
//         this.CantidadReservado = 0;
//         this.CantidadAtendido = 0;
//         this.Action = 0;
//         this.DespachoDetalleId = 0;
//         this.DespachoId = 0;
//         this.Cantidad = 0;
//         this.DetalleReserva = [];
//     }
// }

export class DespachoReservaOPModel {
    ReservaId: number;
    OrdenPedidoId: number;
    OrdenPedidoDetalleId: number;
    MercaderiaId: number;
    Cantidad: number;
    StockId: number;

    constructor() {

        this.ReservaId = 0;
        this.OrdenPedidoId = 0;
        this.OrdenPedidoDetalleId = 0;
        this.MercaderiaId = 0;
        this.Cantidad = 0;
        this.StockId = 0;
    }
}