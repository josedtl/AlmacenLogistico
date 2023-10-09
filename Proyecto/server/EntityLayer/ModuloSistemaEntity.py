from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class ModuloSistemaSaveModel(BaseModel):
    ModuloSistemaId: int 
    Codigo: str 
    Nombre: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class ModuloSistemaItemModel:
    ModuloSistemaId: int 
    Codigo: str 
    Nombre: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  ModuloSistemaItemModel()
        c.ModuloSistemaId = _DB["ModuloSistemaId"] 
        c.Codigo = _DB["Codigo"] 
        c.Nombre = _DB["Nombre"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
