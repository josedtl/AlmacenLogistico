from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class EstadoCivilSaveModel(BaseModel):
    EstadoCivilId: int 
    Nombre: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class EstadoCivilItemModel:
    EstadoCivilId: int 
    Nombre: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  EstadoCivilItemModel()
        c.EstadoCivilId = _DB["EstadoCivilId"] 
        c.Nombre = _DB["Nombre"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
