from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class ProveedorSaveModel(BaseModel):
    ProveedorId: int 
    EsEmpresa: bool 
    TipoDocumentoId: int 
    NumDocumento: str 
    Nombre: str 
    Estado: bool 
    Action: ProcessActionEnum

class ProveedorItemModel:
    ProveedorId: int 
    EsEmpresa: bool 
    TipoDocumentoId: int 
    NumDocumento: str 
    Nombre: str 
    Estado: bool 

    def Cargar(_DB):
        c =  ProveedorItemModel()
        c.ProveedorId = _DB["ProveedorId"] 
        c.EsEmpresa = bool(ord(_DB["EsEmpresa"])) 
        c.TipoDocumentoId = _DB["TipoDocumentoId"] 
        c.NumDocumento = _DB["NumDocumento"] 
        c.Nombre = _DB["Nombre"] 
        c.Estado = bool(ord(_DB["Estado"])) 
        return c
