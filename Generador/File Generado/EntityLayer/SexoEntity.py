from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class SexoSaveModel(BaseModel):
    SexoId: int 
    Nombre: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class SexoItemModel:
    SexoId: int 
    Nombre: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  SexoItemModel()
        c.SexoId = _DB["SexoId"] 
        c.Nombre = _DB["Nombre"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
