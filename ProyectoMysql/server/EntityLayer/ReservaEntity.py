from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class ReservaEntity:
    MercaderiaId: int
    Codigo: str
    Nombre: str
    CodigoComercial: str
    CantidaPedido: float
    Cantidad: float
    Stock: float

    def Cargar(_DB):
        c = ReservaEntity()
        c.MercaderiaId = _DB["MercaderiaId"]
        c.Codigo = _DB["Codigo"]
        c.Nombre = _DB["Nombre"]
        c.CodigoComercial = _DB["CodigoComercial"]
        c.CantidaPedido = _DB["CantidaPedido"]
        c.Cantidad = _DB["cantidad"]
        c.Stock = _DB["Stock"]
        return c

class ReservaMercaderiaOPModel(BaseModel):
    Cantidad: float
    MercaderiaId: int
    OrdenPedidoDetalleId: int

class ReservaPedidoModel:
    OrdenPedidoDetalleId: int
    MercaderiaId: int
    CodigoPedido: str
    Cantidad: float

    def Cargar(_DB):
        c = ReservaPedidoModel()
        c.OrdenPedidoDetalleId = _DB["OrdenPedidoDetalleId"]
        c.MercaderiaId = _DB["MercaderiaId"]
        c.CodigoPedido = _DB["CodigoPedido"]
        c.Cantidad = _DB["Cantidad"]
        return c

class ReservaResumenModel:
    MercaderiaId: int
    Codigo: str
    Nombre: str
    UnidadMedida: str
    Stock: float
    Reserva: float

    def Cargar(_DB):
        c = ReservaResumenModel()
        c.MercaderiaId = _DB["MercaderiaId"]
        c.Codigo = _DB["Codigo"]
        c.Nombre = _DB["Nombre"]
        c.UnidadMedida = _DB["UnidadMedida"]
        c.Stock = _DB["Stock"]
        c.Reserva = _DB["Reserva"]
        return c