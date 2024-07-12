import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'

export class OrdenPedidoDetalleEntity {
    Cont: number = 0;
    OrdenPedidoDetalleId: number;
    OrdenPedidoId: number;
    MercaderiaId: number;
    UnidadMedidaId: number;
    CantidadSolicitado: number;
    CantidadReservado: number;
    CantidadFaltante: number;
    CantidadAtendido: number;
    Enlazado: boolean;
    Atendido: boolean;
    Action: ProcessActionEnum;
    NomProducto: string;
    CategoriaId: number
    CodigoUM: string;
    Stock: number;
    keyItem: string;
    constructor() {
        this.Cont = 0;
        this.OrdenPedidoDetalleId = 0;
        this.OrdenPedidoId = 0;
        this.MercaderiaId = 0;
        this.UnidadMedidaId = 0;
        this.CantidadSolicitado = 0;
        this.CantidadReservado = 0;
        this.CantidadFaltante = 0;
        this.CantidadAtendido = 0;
        this.Enlazado = false;
        this.Atendido = false;
        this.Action = ProcessActionEnum.Add;
        this.NomProducto = '';
        this.CategoriaId = 0;
        this.CodigoUM = '';
        this.Stock = 0;
        this.keyItem = '';
        // Asigna el valor predeterminado de ProcessActionEnum que desees
    }
    

    
}


export class OrdenPedidoFiltroOCDModel {
    Cont: number = 0;
    OrdenPedidoDetalleId: number;
    OrdenPedidoId: number;
    Codigo : string;
    ProcesoId: number;
    NomProceso: string;
    MercaderiaId: number;
    NomMercaderia: string;
    UnidadMedidaId: number;
    NomUnidad: string;
    CantidadSolicitado: number;
    keyItem: string;
    Action: ProcessActionEnum;
    Seleccionar : boolean;
    constructor() {
        this.Cont = 0;
        this.OrdenPedidoDetalleId = 0;
        this.OrdenPedidoId = 0;
        this.Codigo = '';
        this.ProcesoId = 0;
        this.NomProceso = '';
        this.MercaderiaId = 0;
        this.NomMercaderia = '';
        this.UnidadMedidaId = 0;
        this.NomUnidad = '';
        this.CantidadSolicitado = 0;
        this.keyItem = '';
        this.Action = ProcessActionEnum.Add;
        this.Seleccionar=false;
    }
   
}

