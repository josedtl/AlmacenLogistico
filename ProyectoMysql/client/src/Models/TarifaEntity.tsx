export class TarifaEntity {

    TarifaId: number;
    UnidadMedidaId: number;
    MonedaId: number;
    PorcentajeImpuestoId: number;
    PrecioSinImpuesto: number;
    PrecioConImpuesto: number;
    FechaCreacion: Date;
    Vigente: boolean;
    MercaderiaId:number;
    cod:string;
    
    Action: number;

    Valor:string;
    NomProducto :string;
    NomMoneda :string;
    NomUnidad:string;
    constructor() {
        this.TarifaId = 0;
        this.UnidadMedidaId = 0;
        this.MonedaId = 0;
        this.PorcentajeImpuestoId = 0;
        this.PrecioSinImpuesto = 0;
        this.PrecioConImpuesto = 0;
        this.FechaCreacion = new Date();
        this.Vigente = true;
        this.MercaderiaId=0;
        this.cod='';
        this.Action=0;     
        this.Valor='';
        this.NomProducto = '';
        this.NomMoneda = '';
        this.NomUnidad = '';
    }
}