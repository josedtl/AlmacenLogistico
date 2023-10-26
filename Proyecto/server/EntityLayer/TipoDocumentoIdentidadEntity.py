from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class TipoDocumentoIdentidadSaveModel(BaseModel):
    TipoDocumentoIdentidadId: int 
    Codigo: str 
    Alias: str 
    Descripcion: str 
    EsEmpresa: bool 
    Action: ProcessActionEnum

class TipoDocumentoIdentidadItemModel:
    TipoDocumentoIdentidadId: int 
    Codigo: str 
    Alias: str 
    Descripcion: str 
    EsEmpresa: bool 

    def Cargar(_DB):
        c =  TipoDocumentoIdentidadItemModel()
        c.TipoDocumentoIdentidadId = _DB["TipoDocumentoIdentidadId"] 
        c.Codigo = _DB["Codigo"] 
        c.Alias = _DB["Alias"] 
        c.Descripcion = _DB["Descripcion"] 
        c.EsEmpresa = bool(ord(_DB["EsEmpresa"])) 
        return c
