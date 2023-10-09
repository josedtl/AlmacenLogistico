from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class CorrelativoSaveModel(BaseModel):
    CorrelativoId: int 
    Codigo: str 
    Prefijo: str 
    ValorActual: int 
    Descripcion: str 
    Action: ProcessActionEnum

class CorrelativoItemModel:
    CorrelativoId: int 
    Codigo: str 
    Prefijo: str 
    ValorActual: int 
    Descripcion: str 

    def Cargar(_DB):
        c =  CorrelativoItemModel()
        c.CorrelativoId = _DB["CorrelativoId"] 
        c.Codigo = _DB["Codigo"] 
        c.Prefijo = _DB["Prefijo"] 
        c.ValorActual = _DB["ValorActual"] 
        c.Descripcion = _DB["Descripcion"] 
        return c
