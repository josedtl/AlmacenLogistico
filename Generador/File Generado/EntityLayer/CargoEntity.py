from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class CargoSaveModel(BaseModel):
    CargoId: int 
    Nombre: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    Estado: bool 
    Action: ProcessActionEnum

class CargoItemModel:
    CargoId: int 
    Nombre: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    Estado: bool 

    def Cargar(_DB):
        c =  CargoItemModel()
        c.CargoId = _DB["CargoId"] 
        c.Nombre = _DB["Nombre"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.Estado = bool(ord(_DB["Estado"])) 
        return c
