from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class EstadoCivilSaveModel(BaseModel):
    EstadoCivilId: int 
    Nombre: str 
    Action: ProcessActionEnum

class EstadoCivilItemModel:
    EstadoCivilId: int 
    Nombre: str 

    def Cargar(_DB):
        c =  EstadoCivilItemModel()
        c.EstadoCivilId = _DB["EstadoCivilId"] 
        c.Nombre = _DB["Nombre"] 
        return c
