from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class CategoriaSaveModel(BaseModel):
    CategoriaId: int 
    Nombre: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 

class CategoriaItemModel:
    CategoriaId: int 
    Nombre: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  CategoriaItemModel()
        c.CategoriaId = _DB["CategoriaId"] 
        c.Nombre = _DB["Nombre"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = _DB["EstadoRegistro"] 