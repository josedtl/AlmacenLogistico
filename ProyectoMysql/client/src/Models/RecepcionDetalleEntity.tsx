import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'

export class RecepcionDetalleEntity {
    Cont: number = 0;
    RecepcionDetalleId: number;
    OrdenPedidoId: number;
    MercaderiaId: number;
    UnidadMedidaId: number;
    CantidadSolicitado: number;
    CantidadReservado: number;
    CantidadFaltante: number;
    CantidadAtendido: number;
    Enlazado: boolean;
    Atendido: boolean;
    Action: ProcessActionEnum;
    NomProducto: string;
    CategoriaId: number
    CodigoUM: string;
    Stock: number;
    keyItem: string;
    constructor() {
        this.Cont = 0;
        this.RecepcionDetalleId = 0;
        this.OrdenPedidoId = 0;
        this.MercaderiaId = 0;
        this.UnidadMedidaId = 0;
        this.CantidadSolicitado = 0;
        this.CantidadReservado = 0;
        this.CantidadFaltante = 0;
        this.CantidadAtendido = 0;
        this.Enlazado = false;
        this.Atendido = false;
        this.Action = ProcessActionEnum.Add;
        this.NomProducto = '';
        this.CategoriaId = 0;
        this.CodigoUM = '';
        this.Stock = 0;
        this.keyItem = '';
        // Asigna el valor predeterminado de ProcessActionEnum que desees
    }
    

    
}


