export class MercaderiaSaveModel {
    Cont: number;
    MercaderiaId: number;
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
    constructor() {
        this.Cont = 0;
        this.MercaderiaId = 0;
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
    }
}

export class MercaderiaMainModel {
    Cont: number;
    MercaderiaId: number;
    Codigo: string;
    NomCategoria: number;
    NomTipoProducto: number;
    NomMarca: number;
    NomModelo: number;
    Descripcion: string;
    NomUnidadMedida: number;
    FechaRegistro: Date;
    CodUsuario: string;
    EstadoRegistro: boolean;
    constructor() {
        this.Cont = 0;
        this.MercaderiaId = 0;
        this.Codigo = '';
        this.NomCategoria = 0;
        this.NomTipoProducto = 0;
        this.NomMarca = 0;
        this.NomModelo = 0;
        this.Descripcion = '';
        this.NomUnidadMedida = 0;
        this.FechaRegistro = new Date();
        this.CodUsuario = '';
        this.EstadoRegistro = false;
    }
}
