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