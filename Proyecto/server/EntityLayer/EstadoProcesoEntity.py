from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class EstadoProcesoSaveModel(BaseModel):
    EstadoProcesoId: int 
    Valor: int 
    Nombre: str 
    Descripcion: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class EstadoProcesoItemModel:
    EstadoProcesoId: int 
    Valor: int 
    Nombre: str 
    Descripcion: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  EstadoProcesoItemModel()
        c.EstadoProcesoId = _DB["EstadoProcesoId"] 
        c.Valor = _DB["Valor"] 
        c.Nombre = _DB["Nombre"] 
        c.Descripcion = _DB["Descripcion"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
