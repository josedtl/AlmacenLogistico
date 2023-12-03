from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class TipoDocumentoSaveModel(BaseModel):
    TipoDocumentoId: int 
    Codigo: str 
    Nombre: str 
    EsAlmacen: bool 
    EsFacturacion: bool 
    Action: ProcessActionEnum

class TipoDocumentoItemModel:
    TipoDocumentoId: int 
    Codigo: str 
    Nombre: str 
    EsAlmacen: bool 
    EsFacturacion: bool 

    def Cargar(_DB):
        c =  TipoDocumentoItemModel()
        c.TipoDocumentoId = _DB["TipoDocumentoId"] 
        c.Codigo = _DB["Codigo"] 
        c.Nombre = _DB["Nombre"] 
        c.EsAlmacen = bool(ord(_DB["EsAlmacen"])) 
        c.EsFacturacion = bool(ord(_DB["EsFacturacion"])) 
        return c
