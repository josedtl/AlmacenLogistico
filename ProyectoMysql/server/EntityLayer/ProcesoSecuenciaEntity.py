from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class ProcesoSecuenciaSaveModel(BaseModel):
    ProcesoSecuenciaId: int 
    ProcesoId: int 
    EstadoProcesoId: int 
    AnteriorEstadoProcesoId: int 
    OrdenProceso: int 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class ProcesoSecuenciaItemModel:
    ProcesoSecuenciaId: int 
    ProcesoId: int 
    EstadoProcesoId: int 
    AnteriorEstadoProcesoId: int 
    OrdenProceso: int 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  ProcesoSecuenciaItemModel()
        c.ProcesoSecuenciaId = _DB["ProcesoSecuenciaId"] 
        c.ProcesoId = _DB["ProcesoId"] 
        c.EstadoProcesoId = _DB["EstadoProcesoId"] 
        c.AnteriorEstadoProcesoId = _DB["AnteriorEstadoProcesoId"] 
        c.OrdenProceso = _DB["OrdenProceso"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
