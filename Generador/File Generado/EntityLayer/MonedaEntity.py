from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class MonedaSaveModel(BaseModel):
    MonedaId: int 
    CodMoneda: str 
    Simbolo: str 
    Descripcion: str 
    Action: ProcessActionEnum

class MonedaItemModel:
    MonedaId: int 
    CodMoneda: str 
    Simbolo: str 
    Descripcion: str 

    def Cargar(_DB):
        c =  MonedaItemModel()
        c.MonedaId = _DB["MonedaId"] 
        c.CodMoneda = _DB["CodMoneda"] 
        c.Simbolo = _DB["Simbolo"] 
        c.Descripcion = _DB["Descripcion"] 
        return c
