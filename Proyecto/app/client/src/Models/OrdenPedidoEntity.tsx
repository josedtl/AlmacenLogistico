import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'

export class OrdenPedidoEntity {
    OrdenPedidoId: number;
    TipoProcesoId: number;
    Codigo: string;
    EsEmpresaCliente: boolean;
    ClienteId: number;
    ProcesoId: number;
    EstadoProcesoId: number;
    FechaEmision: Date;
    CantidadTotal: number;
    BloqueoEdicionOtros: string;
    FechaRegistro: Date;
    CodUsuario: string;
    EstadoRegistro: boolean;
    Action: ProcessActionEnum;

    constructor() {
        this.OrdenPedidoId = 0;
        this.TipoProcesoId = 0;
        this.Codigo = '';
        this.EsEmpresaCliente = false;
        this.ClienteId = 0;
        this.ProcesoId = 0;
        this.EstadoProcesoId = 0;
        this.FechaEmision = new Date();
        this.CantidadTotal = 0;
        this.BloqueoEdicionOtros = '';
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.EstadoRegistro = false;
        this.Action = ProcessActionEnum.Add;
    }
}