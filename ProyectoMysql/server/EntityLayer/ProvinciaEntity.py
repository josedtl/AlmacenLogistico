from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class ProvinciaSaveModel(BaseModel):
    ProvinciaId: int 
    CodProvincia: int 
    NomProvincia: str 
    DepartamentoId: int 
    Action: ProcessActionEnum

class ProvinciaItemModel:
    ProvinciaId: int 
    CodProvincia: int 
    NomProvincia: str 
    DepartamentoId: int 

    def Cargar(_DB):
        c =  ProvinciaItemModel()
        c.ProvinciaId = _DB["ProvinciaId"] 
        c.CodProvincia = _DB["CodProvincia"] 
        c.NomProvincia = _DB["NomProvincia"] 
        c.DepartamentoId = _DB["DepartamentoId"] 
        return c
