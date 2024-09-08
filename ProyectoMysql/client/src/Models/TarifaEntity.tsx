import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'
export class TarifaEntity {

    TarifaId: number;
    UnidadMedidaId: number;
    MonedaId: number;
    PorcentajeImpuestoId: number;
    PrecioSinImpuesto: number;
    PrecioConImpuesto: number;
    FechaCreacion: Date;
    Vigente: boolean;
    MercaderiaId: number;

    Action: ProcessActionEnum
    NomImpuesto: string;
    Valor: string;
    NomProducto: string;
    NomMoneda: string;
    NomUnidad: string;
    constructor() {

        this.TarifaId = 0;
        this.UnidadMedidaId = 0;
        this.MonedaId = 0;
        this.PorcentajeImpuestoId = 0;
        this.PrecioSinImpuesto = 0;
        this.PrecioConImpuesto = 0;
        this.FechaCreacion = new Date();
        this.Vigente = true;
        this.MercaderiaId = 0;
        this.Action = ProcessActionEnum.Add;
        this.Valor = '';
        this.NomProducto = '';
        this.NomMoneda = '';
        this.NomUnidad = '';
        this.NomImpuesto = '';
    }
}


export class TarifaMonedaModel {

    MonedaId: number;
    CodMoneda: string;
    Simbolo: string;

    constructor() {
        this.MonedaId = 0;
        this.CodMoneda = '';
        this.Simbolo = '';
    }
}


export class TarifaUnidadMedidaPrecioModel {

    TarifaId: number;
    CodUnidad: string;
    UnidadMedidaId: number;
    PrecioConImpuesto: number;

    constructor() {
        this.TarifaId = 0;
        this.CodUnidad = '';
        this.UnidadMedidaId = 0;
        this.PrecioConImpuesto = 0;
    }
}