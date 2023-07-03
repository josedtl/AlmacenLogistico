from datetime import datetime
from pydantic import BaseModel
from EntityLayer.Enumerado.ProcessActionEnum import ProcessActionEnum


class ProductoEntity:
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
    ProcessAction :ProcessActionEnum

    def Cargar(_DB: any):
        c = ProductoEntity()
        c.ProductoId = _DB['ProductoId']
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
        c.ProcessAction = ProcessActionEnum.Add
        return c


class ProductoSaveEntity(BaseModel):
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
    Action :int

    