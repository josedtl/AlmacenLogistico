export class ProductoEntity {
    Cont: number;
    ProductoId: number;
    Codigo: string;
    CategoriaId: number;
    TipoProductoId: number;
    MarcaId: number;
    ModeloId: number;
    Nombre: string;
    Descripcion: string;
    UnidadMedidaId: number;
    Reserva: number;
    Stock: number;
    FechaRegistro: Date;
    CodUsuario: string;
    EstadoRegistro: boolean;
    Action: number;
    CodigoUM: string;
    NomProducto: string;
    constructor() {
        this.Cont = 0;
        this.ProductoId = 0;
        this.Codigo = '';
        this.CategoriaId = 0;
        this.TipoProductoId = 0;
        this.MarcaId = 0;
        this.ModeloId = 0;
        this.Nombre = '';
        this.Descripcion = '';
        this.UnidadMedidaId = 0;
        this.Reserva = 0;
        this.Stock = 0;
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.EstadoRegistro = false;
        this.Action = 0;
        this.CodigoUM = ''; 
        this.NomProducto = '';
    }
}

