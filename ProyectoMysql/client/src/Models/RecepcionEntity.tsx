
import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'

export class RecepcionEntity {
    RecepcionId: number
    ProcesoId: number
    EstadoProcesoId: number
    Codigo: string
    EntidadId: number
    ObjetoId: number
    TipoRecepcionId: number
    TipoComprobanteId: number
    SerieComprobante: string
    CorrelativoComprobante: string
    FechaRecepcion: Date
    FechaRegistro: Date
    CodUsuario: string
    Action: ProcessActionEnum
    ValorEstadoProceso: number
    NomEstadoProceso : string
    TipoRecepcion : string
    constructor() {
        this.RecepcionId = 0;
        this.ProcesoId = 0;
        this.EstadoProcesoId = 0;
        this.EstadoProcesoId = 0;
        this.Codigo = 'd';
        this.EntidadId = 0;
        this.ObjetoId = 0;
        this.TipoRecepcionId = 0;
        this.TipoComprobanteId = 0;
        this.SerieComprobante = '';
        this.CorrelativoComprobante = '';
        this.FechaRecepcion = new Date();
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.Action = ProcessActionEnum.Add;
        this.ValorEstadoProceso = 0;
        this.NomEstadoProceso = 'dd';
        this.TipoRecepcion= '';
    }
}