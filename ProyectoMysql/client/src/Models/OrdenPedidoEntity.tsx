
import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'
import { OrdenPedidoDetalleEntity } from './OrdenPedidoDetalleEntity'

export class OrdenPedidoEntity {
    OrdenPedidoId: number
    ProcesoId: number
    TipoProcesoId: number
    EstadoProcesoId: number
    Codigo: string
    EntidadId: number
    NumDocumentoResponsable: string
    NomResponsable: string
    FechaEmision: Date
    BloqueoEdicionOtros: boolean
    FechaRegistro: Date
    CodUsuario: string
    EstadoRegistro: boolean
    Action: ProcessActionEnum
    NomEstadoProceso: string
    DetalleItems:  OrdenPedidoDetalleEntity[]
    color: string
    ValorEstadoProceso: number
    NomProceso: string
    keyItem: string;
    Seleccionar : boolean;
    constructor() {
        this.OrdenPedidoId = 0;
        this.ProcesoId = 0;
        this.TipoProcesoId = 0;
        this.EstadoProcesoId = 0;
        this.Codigo = '';
        this.EntidadId = 0;
        this.NumDocumentoResponsable = '';
        this.NomResponsable = '';
        this.FechaEmision = new Date();
        this.BloqueoEdicionOtros = false;
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.EstadoRegistro = false;
        this.Action = ProcessActionEnum.Add;
        this.NomEstadoProceso = '';
        this.DetalleItems = [];
        this.color = 'red';
        this.ValorEstadoProceso = 0;
        this.NomProceso = ''
        this.keyItem = '';
        this.Seleccionar=false;
    }
}

export class OrdenPedidoFiltroOCOModel {
    OrdenPedidoId: number
    Codigo: string
    EntidadId: number
    NomProceso: string
    NomResponsable: string
    FechaEmision: Date
    keyItem: string;
    Action: ProcessActionEnum
    Seleccionar : boolean;
    constructor() {
        this.OrdenPedidoId = 0;
        this.Codigo = '';
        this.EntidadId = 0;
        this.NomProceso = ''
        this.NomResponsable = '';
        this.FechaEmision = new Date();
        this.keyItem = '';
        this.Action = ProcessActionEnum.Add;
        this.Seleccionar=false;
    }
}

export class OrdenPedidoCambioEstadoEDP {
    OrdenPedidoId: number
    EstadoProcesoId: number;
    constructor() {
        this.OrdenPedidoId = 0;
        this.EstadoProcesoId  = 0;
    }
}
