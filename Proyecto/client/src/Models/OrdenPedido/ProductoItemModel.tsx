
export class ProductoItemModel {
    ProductoId: number;
    Codigo: string;
    Nombre: string;
    UnidadMedidaId: number;
    Stock: number;

    constructor() {
        this.ProductoId = 0;
        this.Codigo = '';
        this.Nombre = '';
        this.UnidadMedidaId = 0;
        this.Stock = 0;
    }
}