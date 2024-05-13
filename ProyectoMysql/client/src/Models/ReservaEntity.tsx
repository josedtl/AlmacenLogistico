
export class ReservaEntity {
    MercaderiaId: number;
    Codigo: string;
    Nombre: string;
    CodigoComercial: string;
    CantidaPedido: number;
    Cantidad: number;
    DetalleItems:  ReservaPedidoModel[]
    constructor() {
        this.MercaderiaId = 0;
        this.Codigo = '';
        this.Nombre = '';
        this.CodigoComercial = '';
        this.CantidaPedido = 0;
        this.Cantidad = 0;
        this.DetalleItems = [];
    }
}

export class ReservaMercaderiaOPModel {
    OrdenPedidoDetalleId: number;
    MercaderiaId: number;
    Cantidad: number;
    constructor() {
        this.OrdenPedidoDetalleId = 0;
        this.MercaderiaId = 0;
        this.Cantidad = 0;
    }

}

export class ReservaPedidoModel {
    OrdenPedidoDetalleId: number;
    MercaderiaId: number;
    CodigoPedido: string;
    Cantidad: number;
    constructor() {
        this.OrdenPedidoDetalleId = 0;
        this.MercaderiaId = 0;
        this.CodigoPedido = '';
        this.Cantidad = 0;
    }

}