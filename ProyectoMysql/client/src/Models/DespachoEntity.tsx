
import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'

export class DespachoEntity {

    DespachoId = 0;
    OrdenPedidoId: number;
    Codigo = '';
    NomProceso: string;
    ProcesoId: number;
    EntidadId: number ;
    NomResponsable: string;
    DetalleItems: DespachoDetalleEntity[];
    FechaHoraEntrega: Date;
    FechaRegistro : '';

    constructor() {
        this.DespachoId=0;
        this.OrdenPedidoId = 0;
        this.Codigo="";
        this.ProcesoId = 0;
        this.NomProceso = "";
        this.EntidadId = 0;
        this.NomResponsable = "";
        this.FechaHoraEntrega =new Date();
        this.FechaRegistro = ""; 
        this.DetalleItems = [];

    }
}

export class DespachoDetalleEntity {
    DespachoDetalleId: number;
    DespachoId: number;
    Cantidad: number;
    OrdenPedidoDetalleId: number;
    Action: ProcessActionEnum
    NomProducto:'';
    CodigoUM:'';
    CantidadSolicitado:0;
    CantidadAtendido:0;

    DetalleReserva: DespachoReservaOPModel[]
    constructor() {
        this.DespachoDetalleId = 0;
        this.DespachoId = 0;
        this.Cantidad = 0;
        this.OrdenPedidoDetalleId = 0;
        this.NomProducto ="";
        this.CodigoUM ="";
        this.CantidadSolicitado = 0;
        this.CantidadAtendido =0;
        this.Action = ProcessActionEnum.Add;
        this.DetalleReserva = [];
    }
}

// export class DespachoCabeceraModel {
//     OrdenPedidoId: number;
//     ProcesoId: number;
//     NomProceso: string;
//     EntidadId: number;
//     NomResponsable: string;
//     DetalleItems: DespachoDetalleModel[]
//     Action: ProcessActionEnum
//     constructor() {

//         this.OrdenPedidoId = 0;
//         this.ProcesoId = 0;
//         this.NomProceso = "";
//         this.EntidadId = 0;
//         this.NomResponsable = "";
//         this.Action = ProcessActionEnum.Add;
//         this.DetalleItems = [];
//     }
// }

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