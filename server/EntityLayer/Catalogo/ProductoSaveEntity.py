import datetime
from pydantic import BaseModel


class ProductoSaveEntity(BaseModel):
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
