from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class ReservaDetalleModel(BaseModel):
    OrdenPedidoDetalleId: int = 0
    MercaderiaId: int = 0
    Cantidad: float = 0

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class ReservaItemModel(BaseModel):
    MercaderiaId: int = 0
    Codigo: str = ''
    Nombre: str = ''
    CodigoComercial: str = ''
    CantidaPedido: float = 0
    Cantidad: float = 0
    Stock: float = 0
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class ReservaMercaderiaOPModel(BaseModel):
    Cantidad: float = 0
    MercaderiaId: int = 0
    OrdenPedidoDetalleId: int = 0
    OrdenPedidoDetalleId: int = 0
    Action : ProcessActionEnum = ProcessActionEnum.Loaded
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB) 
    
class ReservaPedidoModel(BaseModel):
    OrdenPedidoDetalleId: int = 0
    MercaderiaId: int = 0
    CodigoPedido: str = ''
    Cantidad: float = ''

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class ReservaResumenModel(BaseModel):
    MercaderiaId: int = 0
    Codigo: str = ''
    Nombre: str = ''
    UnidadMedida: str = ''
    Stock: float = 0
    Reserva: float = 0

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)