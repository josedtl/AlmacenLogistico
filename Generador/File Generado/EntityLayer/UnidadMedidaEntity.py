from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class UnidadMedidaSaveModel(BaseModel):
    UnidadMedidaId: int 
    Codigo: str 
    CodigoComercial: str 
    Nombre: str 
    Action: ProcessActionEnum

class UnidadMedidaItemModel:
    UnidadMedidaId: int 
    Codigo: str 
    CodigoComercial: str 
    Nombre: str 

    def Cargar(_DB):
        c =  UnidadMedidaItemModel()
        c.UnidadMedidaId = _DB["UnidadMedidaId"] 
        c.Codigo = _DB["Codigo"] 
        c.CodigoComercial = _DB["CodigoComercial"] 
        c.Nombre = _DB["Nombre"] 
        return c
