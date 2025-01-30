export class MercaderiaPresentacionSaveModel {
    Cont: number;
    MercaderiaPresentacionId: number;
    MercaderiaId: number;
    UnidadMedidaId: number;
    Cantidad: number;
    Action: number;
    NomUnidadMedida: string;
    keyItem : string;
    constructor() {
        this.Cont = 0;
        this.MercaderiaPresentacionId = 0;
        this.MercaderiaId = 0;
        this.UnidadMedidaId = 0;
        this.Cantidad = 0;
        this.UnidadMedidaId = 0;
        this.Action = 0;
        this.NomUnidadMedida = '';
        this.keyItem = '';
    }
}