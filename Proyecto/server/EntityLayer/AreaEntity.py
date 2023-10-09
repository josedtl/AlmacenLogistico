from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class AreaSaveModel(BaseModel):
    AreaId: int 
    Nombre: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    Estado: bool 
    Action: ProcessActionEnum

class AreaItemModel:
    AreaId: int 
    Nombre: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    Estado: bool 

    def Cargar(_DB):
        c =  AreaItemModel()
        c.AreaId = _DB["AreaId"] 
        c.Nombre = _DB["Nombre"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.Estado = bool(ord(_DB["Estado"])) 
        return c
