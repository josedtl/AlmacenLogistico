import datetime 

class ProductoEntity:
    ProductoId: int
    TipoProductoId: int
    MarcaId: int
    ModeloId: int
    NombreProducto :str
    UnidadMedidaId: int
    PrecioVenta :float
    PrecioCompra :float
    FechaRegistro:  datetime
    CodUsuario : str
    Estado: bool


    def Cargar(_DB: any):
        c = ProductoEntity()
        c.ProductoId = _DB['ProductoId']
        c.TipoProductoId = _DB['TipoProductoId']
        c.MarcaId = _DB['MarcaId']
        c.ModeloId = _DB['ModeloId']
        c.NombreProducto = _DB['NombreProducto']
        c.UnidadMedidaId = _DB['UnidadMedidaId']
        c.PrecioVenta = _DB['PrecioVenta']      
        c.PrecioCompra = _DB['PrecioCompra'] 
        c.FechaRegistro = _DB['FechaRegistro']
        c.CodUsuario = _DB['CodUsuario']
        c.Estado = bool(_DB['Estado'])
        return c

 