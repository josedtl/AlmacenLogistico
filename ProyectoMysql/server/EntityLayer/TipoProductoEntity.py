from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class TipoProductoSaveModel(BaseModel):
    TipoProductoId: int 
    Nombre: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class TipoProductoItemModel:
    TipoProductoId: int 
    Nombre: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  TipoProductoItemModel()
        c.TipoProductoId = _DB["TipoProductoId"] 
        c.Nombre = _DB["Nombre"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c

    def CargarItem(_DB):
        c =  TipoProductoItemModel()
        c.TipoProductoId = _DB["TipoProductoId"] 
        c.Nombre = _DB["Nombre"] 
        return c