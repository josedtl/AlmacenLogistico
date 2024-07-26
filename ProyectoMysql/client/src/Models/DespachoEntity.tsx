
import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'
export class DespachoEntity {
    OrdenPedidoId: number;
    Codigo: string;
    Nombre: string;
    NombreCompleto: string;
    Documento: string;
    FechaRegistro: Date;
    
    Action: ProcessActionEnum
    constructor() {
        this.OrdenPedidoId = 0;
        this.Codigo = '';
        this.Nombre = '';
        this.NombreCompleto = '';
        this.Documento = '';
        this.FechaRegistro = new Date();
        this.Action = ProcessActionEnum.Add;
    }
}

export class DespachoDetalleEntity {
    DespachoDetalleId: number;
    DespachoId: number;
    Cantidad: number;
    OrdenPedidoDetalleId: number;
    
    Action: ProcessActionEnum
    constructor() {
        this.DespachoDetalleId = 0;
        this.DespachoId = 0;
        this.Cantidad = 0;
        this.OrdenPedidoDetalleId = 0;
        this.Action = ProcessActionEnum.Add;

    }
}

export class DespachoCabeceraModel{
    OrdenPedidoId:number;
    ProcesoId:number;
    NomProceso:string;
    EntidadId:number;
    NomResponsable:string;
    
    DetalleItems:  DespachoDetalleModel[]
    Action: ProcessActionEnum
    constructor(){

        this.OrdenPedidoId = 0;
        this.ProcesoId = 0;
        this.NomProceso = "";
        this.EntidadId = 0;
        this.NomResponsable = "";
        this.Action = ProcessActionEnum.Add;
        this.DetalleItems = [];
    }
}

export class DespachoDetalleModel{
    OrdenPedidoId:number;
    OrdenPedidoDetalleId:number;
    NomProducto:string;
    CodigoUM:string;
    CantidadSolicitado:number;
    CantidadReservado:number;
    CantidadAtendido:number;

    Action: ProcessActionEnum
    constructor(){
        this.OrdenPedidoId = 0;
        this.OrdenPedidoDetalleId = 0;
        this.NomProducto = "";
        this.CodigoUM = "";
        this.CantidadSolicitado = 0;
        this.CantidadReservado = 0;
        this.CantidadAtendido = 0;
        this.Action = ProcessActionEnum.Add;
    }
}