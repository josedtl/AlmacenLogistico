export class DespachoEntity {
    OrdenPedidoId: number;
    Codigo: string;
    Nombre: string;
    NombreCompleto: string;
    Documento: string;
    FechaRegistro: Date;
    constructor() {
        this.OrdenPedidoId = 0;
        this.Codigo = '';
        this.Nombre = '';
        this.NombreCompleto = '';
        this.Documento = '';
        this.FechaRegistro = new Date();
    }
}

export class DespachoDetalleEntity {
    DespachoDetalleId: number;
    DespachoId: number;
    Cantidad: number;
    OrdenPedidoDetalleId: number;
    constructor() {
        this.DespachoDetalleId = 0;
        this.DespachoId = 0;
        this.Cantidad = 0;
        this.OrdenPedidoDetalleId = 0;

    }
}
