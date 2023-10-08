from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class DepartamentoSaveModel(BaseModel):
    DepartamentoId: int 
    CodDepartamento: int 
    NomDepartamento: str 
    Action: ProcessActionEnum

class DepartamentoItemModel:
    DepartamentoId: int 
    CodDepartamento: int 
    NomDepartamento: str 

    def Cargar(_DB):
        c =  DepartamentoItemModel()
        c.DepartamentoId = _DB["DepartamentoId"] 
        c.CodDepartamento = _DB["CodDepartamento"] 
        c.NomDepartamento = _DB["NomDepartamento"] 
        return c
