from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class ProductoEntity(BaseModel):
    ProductoId: int
    Codigo: str
    CategoriaId: int
    TipoProductoId: int
    MarcaId: int
    ModeloId: int
    Nombre: str
    Descripcion: str
    UnidadMedidaId: int
    PrecioVenta: float
    PrecioCompra: float
    MonedaId: int
    AplicaDetallePrecios: bool
    Reserva: float
    Stock: float
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool
    Action: ProcessActionEnum

class ProductoItemEntity():
    ProductoId: int
    Codigo: str
    CategoriaId: int
    TipoProductoId: int
    MarcaId: int
    ModeloId: int
    Nombre: str
    Descripcion: str
    UnidadMedidaId: int
    PrecioVenta: float
    PrecioCompra: float
    MonedaId: int
    AplicaDetallePrecios: bool
    Reserva: float
    Stock: float
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool

    def CargarMain(_DB):
        c = ProductoItemEntity()
        c.ProductoId = _DB['ProductoId']
        c.Codigo = _DB['Codigo']
        c.CategoriaId = _DB['CategoriaId']
        c.TipoProductoId = _DB['TipoProductoId']
        c.MarcaId = _DB['MarcaId']
        c.ModeloId = _DB['ModeloId']
        c.Nombre = _DB['Nombre']
        c.Descripcion = _DB['Descripcion']
        c.UnidadMedidaId = _DB['UnidadMedidaId']
        c.PrecioVenta = _DB['PrecioVenta']
        c.PrecioCompra = _DB['PrecioCompra']
        c.MonedaId = _DB['MonedaId']
        c.AplicaDetallePrecios = bool(ord(_DB['AplicaDetallePrecios']))
        c.Reserva = _DB['Reserva']
        c.Stock = _DB['Stock']
        c.FechaRegistro = _DB['FechaRegistro']
        c.CodUsuario = _DB['CodUsuario']
        c.EstadoRegistro = bool(ord(_DB['EstadoRegistro']))
        return c
