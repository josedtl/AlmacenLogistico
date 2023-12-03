from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class OrdenCompraControlProcesoSaveModel(BaseModel):
    OrdenCompraControlProcesoId: int 
    OrdenCompraId: int 
    EstadoProcesoId: int 
    Observacion: str 
    CodUsuario: str 
    FechaRegistro: datetime 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class OrdenCompraControlProcesoItemModel:
    OrdenCompraControlProcesoId: int 
    OrdenCompraId: int 
    EstadoProcesoId: int 
    Observacion: str 
    CodUsuario: str 
    FechaRegistro: datetime 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  OrdenCompraControlProcesoItemModel()
        c.OrdenCompraControlProcesoId = _DB["OrdenCompraControlProcesoId"] 
        c.OrdenCompraId = _DB["OrdenCompraId"] 
        c.EstadoProcesoId = _DB["EstadoProcesoId"] 
        c.Observacion = _DB["Observacion"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
