from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class TipoSexoSaveModel(BaseModel):
    TipoSexoId: int 
    Nombre: str 
    Action: ProcessActionEnum

class TipoSexoItemModel:
    TipoSexoId: int 
    Nombre: str 

    def Cargar(_DB):
        c =  TipoSexoItemModel()
        c.TipoSexoId = _DB["TipoSexoId"] 
        c.Nombre = _DB["Nombre"] 
        return c
