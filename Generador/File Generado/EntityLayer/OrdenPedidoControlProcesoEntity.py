from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class OrdenPedidoControlProcesoSaveModel(BaseModel):
    OrdenPedidoControlProcesoId: int 
    OrdenPedidoId: int 
    EstadoProcesoId: int 
    Observacion: str 
    CodUsuario: str 
    FechaRegistro: datetime 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class OrdenPedidoControlProcesoItemModel:
    OrdenPedidoControlProcesoId: int 
    OrdenPedidoId: int 
    EstadoProcesoId: int 
    Observacion: str 
    CodUsuario: str 
    FechaRegistro: datetime 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  OrdenPedidoControlProcesoItemModel()
        c.OrdenPedidoControlProcesoId = _DB["OrdenPedidoControlProcesoId"] 
        c.OrdenPedidoId = _DB["OrdenPedidoId"] 
        c.EstadoProcesoId = _DB["EstadoProcesoId"] 
        c.Observacion = _DB["Observacion"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
