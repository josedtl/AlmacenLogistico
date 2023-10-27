from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class UbigeoSaveModel(BaseModel):
    UbigeoId: int 
    CodUbigeo: int 
    DesUbigeo: str 
    DepartamentoId: int 
    ProvinciaId: int 
    DistritoId: int 
    Action: ProcessActionEnum

class UbigeoItemModel:
    UbigeoId: int 
    CodUbigeo: int 
    DesUbigeo: str 
    DepartamentoId: int 
    ProvinciaId: int 
    DistritoId: int 

    def Cargar(_DB):
        c =  UbigeoItemModel()
        c.UbigeoId = _DB["UbigeoId"] 
        c.CodUbigeo = _DB["CodUbigeo"] 
        c.DesUbigeo = _DB["DesUbigeo"] 
        c.DepartamentoId = _DB["DepartamentoId"] 
        c.ProvinciaId = _DB["ProvinciaId"] 
        c.DistritoId = _DB["DistritoId"] 
        return c
