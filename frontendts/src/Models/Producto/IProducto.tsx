export interface IProducto {
    ProductoId: number;
    Codigo: string;
    CodigoInterno: string;
    TipoProductoId: number;
    MarcaId: number;
    ModeloId: number;
    Descripcion: string;
    UnidadMedidaId: number;
    PrecioVenta: number;
    PrecioCompra: number;
    MonedaId: number;
    FechaRegistro: string;
    CodUsuario: string;
    Estado: boolean;

}