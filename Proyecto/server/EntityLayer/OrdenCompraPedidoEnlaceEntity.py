from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class OrdenCompraPedidoEnlaceSaveModel(BaseModel):
    OrdenCompraPedidoEnlaceId: int 
    OrdenCompraId: int 
    OrdenPedidoId: int 
    OrdenCompraDetalleId: int 
    OrdenPedidoDetalleId: int 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class OrdenCompraPedidoEnlaceItemModel:
    OrdenCompraPedidoEnlaceId: int 
    OrdenCompraId: int 
    OrdenPedidoId: int 
    OrdenCompraDetalleId: int 
    OrdenPedidoDetalleId: int 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  OrdenCompraPedidoEnlaceItemModel()
        c.OrdenCompraPedidoEnlaceId = _DB["OrdenCompraPedidoEnlaceId"] 
        c.OrdenCompraId = _DB["OrdenCompraId"] 
        c.OrdenPedidoId = _DB["OrdenPedidoId"] 
        c.OrdenCompraDetalleId = _DB["OrdenCompraDetalleId"] 
        c.OrdenPedidoDetalleId = _DB["OrdenPedidoDetalleId"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
