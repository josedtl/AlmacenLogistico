
export class ReservaEntity {
    MercaderiaId: number;
    Codigo: string;
    Nombre: string;
    CodigoComercial: string;
    CantidaPedido: number;
    Cantidad: number;
    Stock: number;
    constructor() {
        this.MercaderiaId = 0;
        this.Codigo = '';
        this.Nombre = '';
        this.CodigoComercial = '';
        this.CantidaPedido = 0;
        this.Cantidad = 0;
        this.Stock = 0;
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


export class ReservaResumenModel {
    MercaderiaId: number;
    Codigo: string;
    Nombre: string;
    UnidadMedida: string;
    Stock: number;
    Reserva: number;
    DetalleItems: ReservaPedidoModel[]
    constructor() {
        this.MercaderiaId = 0;
        this.Codigo = '';
        this.Nombre = '';
        this.UnidadMedida = '';
        this.Stock = 0;
        this.Reserva = 0;
        this.DetalleItems = [];
    }
}



export class ReservaDetalleEntity {
   
    OrdenPedidoDetalleId: number;
    MercaderiaId: number;
    Cantidad: number;
    constructor() {

        this.OrdenPedidoDetalleId = 0;
        this.MercaderiaId = 0;
        this.Cantidad = 0;
    }
}

export class  Reserva{
    ReservaId : number;
    OrdenPedidoId: number;
    OrdenPedidoDetalleId: number;
    MercaderiaId: number;
    Cantidad: number;
    StockId: number;

    Codigo: string;
    Nombre: string;
    CodigoComercial: string;
    CantidaPedido: number;
    Stock: number;
    CodigoPedido
    UnidadMedida
    Reserva: number;
    constructor(){
        this.ReservaId = 0;
        this.OrdenPedidoId = 0;
        this.OrdenPedidoDetalleId = 0;
        this.MercaderiaId = 0;
        this.Cantidad = 0;
        this.StockId = 0;
   
        this.Codigo ='';
        this.Nombre = '';
        this.CodigoComercial = '';
        this.CantidaPedido = 0;
        this.Stock = 0;
        this.CodigoPedido = '';
        this.UnidadMedida = '';
        this.Reserva = 0;

    }

}



