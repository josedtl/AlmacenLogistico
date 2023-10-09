from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class ProveedorEmpresaSaveModel(BaseModel):
    ProveedorEmpresaId: int 
    ProveedorId: int 
    EmpresaId: int 
    Action: ProcessActionEnum

class ProveedorEmpresaItemModel:
    ProveedorEmpresaId: int 
    ProveedorId: int 
    EmpresaId: int 

    def Cargar(_DB):
        c =  ProveedorEmpresaItemModel()
        c.ProveedorEmpresaId = _DB["ProveedorEmpresaId"] 
        c.ProveedorId = _DB["ProveedorId"] 
        c.EmpresaId = _DB["EmpresaId"] 
        return c
