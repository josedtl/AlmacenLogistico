from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class CategoriaEntity(BaseModel):
    CategoriaId: int
    Nombre :str
    FechaRegistro:  datetime
    CodUsuario : str
    EstadoFechaRegistro: bool
    Action: ProcessActionEnum

class CategoriaItemEntity():
    CategoriaId: int
    Nombre :str
    FechaRegistro:  datetime
    CodUsuario : str
    EstadoFechaRegistro: bool

    def CargarMain(_DB: any):
        c = CategoriaItemEntity()
        c.CategoriaId = _DB['CategoriaId']
        c.Nombre = _DB['Nombre']
        return c
