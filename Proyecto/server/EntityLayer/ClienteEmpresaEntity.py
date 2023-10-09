from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class ClienteEmpresaSaveModel(BaseModel):
    ClienteEmpresaId: int 
    ClienteId: int 
    EmpresaId: int 
    Action: ProcessActionEnum

class ClienteEmpresaItemModel:
    ClienteEmpresaId: int 
    ClienteId: int 
    EmpresaId: int 

    def Cargar(_DB):
        c =  ClienteEmpresaItemModel()
        c.ClienteEmpresaId = _DB["ClienteEmpresaId"] 
        c.ClienteId = _DB["ClienteId"] 
        c.EmpresaId = _DB["EmpresaId"] 
        return c
