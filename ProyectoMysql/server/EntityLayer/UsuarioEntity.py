from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class UsuarioSaveModel(BaseModel):
    UsuarioId: int 
    EmpleadoId: int 
    CodUsuario: str 
    Contrasena: str 
    FechaRegistro: datetime 
    RegistroCodUsuario: str 
    Estado: bool 
    Action: ProcessActionEnum

class UsuarioItemModel:
    UsuarioId: int 
    EmpleadoId: int 
    CodUsuario: str 
    Contrasena: str 
    FechaRegistro: datetime 
    RegistroCodUsuario: str 
    Estado: bool 

    def Cargar(_DB):
        c =  UsuarioItemModel()
        c.UsuarioId = _DB["UsuarioId"] 
        c.EmpleadoId = _DB["EmpleadoId"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.Contrasena = _DB["Contrasena"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.RegistroCodUsuario = _DB["RegistroCodUsuario"] 
        c.Estado = bool(ord(_DB["Estado"])) 
        return c
