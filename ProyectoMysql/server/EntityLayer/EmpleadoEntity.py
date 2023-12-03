from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class EmpleadoSaveModel(BaseModel):
    EmpleadoId: int 
    PersonaNaturalId: int 
    AreaId: int 
    CargoId: int 
    CorreoCorporativo: str 
    FechaIngreso: datetime 
    FechaRegistro: datetime 
    CodUsuario: str 
    Estado: bool 
    Action: ProcessActionEnum

class EmpleadoItemModel:
    EmpleadoId: int 
    PersonaNaturalId: int 
    AreaId: int 
    CargoId: int 
    CorreoCorporativo: str 
    FechaIngreso: datetime 
    FechaRegistro: datetime 
    CodUsuario: str 
    Estado: bool 

    def Cargar(_DB):
        c =  EmpleadoItemModel()
        c.EmpleadoId = _DB["EmpleadoId"] 
        c.PersonaNaturalId = _DB["PersonaNaturalId"] 
        c.AreaId = _DB["AreaId"] 
        c.CargoId = _DB["CargoId"] 
        c.CorreoCorporativo = _DB["CorreoCorporativo"] 
        c.FechaIngreso = _DB["FechaIngreso"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.Estado = bool(ord(_DB["Estado"])) 
        return c
