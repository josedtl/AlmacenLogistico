export class TarifaEntity {

    TarifaId: number;
    UnidadMedidaId: number;
    MonedaId: number;
    PorcentajeImpuestoId: number;
    PrecioSinInpuesto: number;
    PrecioConInpuesto: number;
    FechaCreacion: Date;
    Vigente: boolean;
    MercaderiaId:number;
    cod:string;
    
    Action: number;
    constructor() {
        this.TarifaId = 0;
        this.UnidadMedidaId = 0;
        this.MonedaId = 0;
        this.PorcentajeImpuestoId = 0;
        this.PrecioSinInpuesto = 0;
        this.PrecioConInpuesto = 0;
        this.FechaCreacion = new Date();
        this.Vigente = true;
        this.MercaderiaId=0;
        this.cod='';
        this.Action=0;
    }
}