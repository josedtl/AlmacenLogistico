from datetime import datetime


class ProductoItemMainEntity:
    ProductoId: int
    Codigo: str
    CodigoInterno: str
    TipoProductoId: int
    MarcaId: int
    ModeloId: int
    Descripcion: str
    UnidadMedidaId: int
    PrecioVenta: float
    PrecioCompra: float
    MonedaId: int
    FechaRegistro:  datetime
    CodUsuario: str
    Estado: bool
    NomTipoProducto: str
    NomMarca: str
    NomModelo: str

    def Cargar(_DB: any):
        c = ProductoItemMainEntity()
        c.ProductoId = _DB['ProductoId']
        c.Codigo = _DB['Codigo']
        c.CodigoInterno = _DB['CodigoInterno']
        c.TipoProductoId = _DB['TipoProductoId']
        c.MarcaId = _DB['MarcaId']
        c.ModeloId = _DB['ModeloId']
        c.Descripcion = _DB['Descripcion']
        c.UnidadMedidaId = _DB['UnidadMedidaId']
        c.PrecioVenta = _DB['PrecioVenta']
        c.PrecioCompra = _DB['PrecioCompra']

        c.FechaRegistro = _DB['FechaRegistro']
        c.CodUsuario = _DB['CodUsuario']
        c.Estado = bool(_DB['Estado'])
        c.NomTipoProducto = _DB['NomTipoProducto']
        c.NomMarca = _DB['NomMarca']
        c.NomModelo = _DB['NomModelo']
        return c
