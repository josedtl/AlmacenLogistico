
import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'
import { OrdenCompraDetalleEntity } from './OrdenCompraDetalleEntity'

export class OrdenCompraEntity {
    OrdenCompraId: number
    ProcesoId: number
    EstadoProcesoId: number
    TipoProcesoId: number
    Codigo: string
    EntidadId: number
    NumDocumentoProveedor: string
    NomProveedor: string
    FechaEmision: Date
    FechaRegistro: Date
    CodUsuario: string
    Action: ProcessActionEnum
    NomEstadoProceso: string
    DetalleItems: OrdenCompraDetalleEntity[]
    color: string
    ValorEstadoProceso: number
    constructor() {
        this.OrdenCompraId = 0;
        this.ProcesoId = 0;
        this.EstadoProcesoId = 0;
        this.TipoProcesoId = 0;
        this.Codigo = '';
        this.EntidadId = 0;
        this.NumDocumentoProveedor = '';
        this.NomProveedor = '';
        this.FechaEmision = new Date();
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.Action = ProcessActionEnum.Add;
        this.NomEstadoProceso = '';
        this.DetalleItems = [];
        this.color = 'red';
        this.ValorEstadoProceso = 0;
    }
}