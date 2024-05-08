import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'

export class RecepcionDetalleEntity {
    Cont: number = 0;
    RecepcionDetalleId: number;
    RecepcionId: number;
    MercaderiaId: number;
    Cantidad: number;
    Lote: string;
    FechaIngreso: Date
    FechaRegistro: Date;
    Observacion: string;
    FechaVencimiento: Date;
    Action: number;
    NomProducto: string;
    CategoriaId: number
    CodigoUM: string;
    Stock: number;
    keyItem: string;
    
    constructor() {
        this.Cont = 0;
        this.RecepcionDetalleId = 0;
        this.RecepcionId = 0;
        this.MercaderiaId = 0;
        this.Cantidad = 0;
        this.Lote = '';
        this.FechaIngreso = new Date();
        this.FechaRegistro = new Date();
        this.Observacion = '';
        this.FechaVencimiento = new Date();
        this.Action = ProcessActionEnum.Add;
        this.keyItem = '';
        this.NomProducto = '';
        this.CategoriaId = 0;
        this.CodigoUM = '';
        this.Stock = 0;
    }



}


