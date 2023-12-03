from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class DistritoSaveModel(BaseModel):
    DistritoId: int 
    CodDistrito: int 
    NomDistrito: str 
    ProvinciaId: int 
    Action: ProcessActionEnum

class DistritoItemModel:
    DistritoId: int 
    CodDistrito: int 
    NomDistrito: str 
    ProvinciaId: int 

    def Cargar(_DB):
        c =  DistritoItemModel()
        c.DistritoId = _DB["DistritoId"] 
        c.CodDistrito = _DB["CodDistrito"] 
        c.NomDistrito = _DB["NomDistrito"] 
        c.ProvinciaId = _DB["ProvinciaId"] 
        return c
