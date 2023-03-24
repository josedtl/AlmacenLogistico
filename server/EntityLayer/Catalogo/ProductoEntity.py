from datetime import datetime


class ProductoEntity:
    ProductoId: int
    TipoProductoId: int
    MarcaId: int
    ModeloId: int
    FechaRegistro: datetime
    Usuario : str
    Estado: bool


    def Cargar(_DB: any):
        c = ProductoEntity()
        c.ProductoId = _DB['ProductoId']
        c.TipoProductoId = _DB['TipoProductoId']
        c.MarcaId = _DB['TipoProductoId']
        c.ModeloId = _DB['TipoProductoId']
        c.FechaRegistro = _DB['FechaRegistro']
        c.Usuario = _DB['Usuario']
        c.Estado = bool(_DB['Estado'])
        return c

