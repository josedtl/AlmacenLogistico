from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class ClienteSaveModel(BaseModel):
    ClienteId: int 
    EsEmpresa: bool 
    TipoDocumentoId: int 
    NumDocumento: str 
    Nombre: str 
    Estado: bool 
    Action: ProcessActionEnum

class ClienteItemModel:
    ClienteId: int 
    EsEmpresa: bool 
    TipoDocumentoId: int 
    NumDocumento: str 
    Nombre: str 
    Estado: bool 

    def Cargar(_DB):
        c =  ClienteItemModel()
        c.ClienteId = _DB["ClienteId"] 
        c.EsEmpresa = bool(ord(_DB["EsEmpresa"])) 
        c.TipoDocumentoId = _DB["TipoDocumentoId"] 
        c.NumDocumento = _DB["NumDocumento"] 
        c.Nombre = _DB["Nombre"] 
        c.Estado = bool(ord(_DB["Estado"])) 
        return c
