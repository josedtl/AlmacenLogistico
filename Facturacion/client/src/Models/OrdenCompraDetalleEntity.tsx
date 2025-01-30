import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'

export class OrdenCompraDetalleEntity {
    Cont: number = 0;
    OrdenCompraDetalleId: number;
    OrdenCompraId: number;
    MercaderiaId: number;
    UnidadMedidaId: number;
    CantidadSolicitado: number;
    CantidadComprado: number;
    CantidadFaltante: number;
    PrecioUnitario: number;
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
        this.OrdenCompraDetalleId = 0;
        this.OrdenCompraId = 0;
        this.MercaderiaId = 0;
        this.UnidadMedidaId = 0;
        this.CantidadSolicitado = 0;
        this.CantidadComprado = 0;
        this.CantidadFaltante = 0;
        this.PrecioUnitario = 0;
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


