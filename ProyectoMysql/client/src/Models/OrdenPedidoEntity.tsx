
import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'
import { OrdenPedidoDetalleEntity } from './OrdenPedidoDetalleEntity'

export class OrdenPedidoEntity {
    OrdenPedidoId: number
    ProcesoId: number
    TipoProcesoId: number
    EstadoProcesoId: number
    Codigo: string
    ResponsableId: number
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
    NomTipoProceso: string
    constructor() {
        this.OrdenPedidoId = 0;
        this.ProcesoId = 0;
        this.TipoProcesoId = 0;
        this.EstadoProcesoId = 0;
        this.Codigo = '';
        this.ResponsableId = 0;
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
        this.NomTipoProceso = ''
    }
}