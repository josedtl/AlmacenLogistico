from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class TipoRequerimientoSaveModel(BaseModel):
    TipoRequerimientoId: int 
    Codigo: str 
    Nombre: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class TipoRequerimientoItemModel:
    TipoRequerimientoId: int 
    Codigo: str 
    Nombre: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  TipoRequerimientoItemModel()
        c.TipoRequerimientoId = _DB["TipoRequerimientoId"] 
        c.Codigo = _DB["Codigo"] 
        c.Nombre = _DB["Nombre"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
