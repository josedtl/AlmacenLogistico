from datetime import datetime
from pydantic import BaseModel, constr
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class CategoriaEntity(BaseModel):
    CategoriaId: int
    Nombre: str
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool
    Action: ProcessActionEnum


class CategoriaItemEntity:
    CategoriaId: int
    Nombre: str
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool

    def CargarMain(_DB: any):
        c = CategoriaItemEntity()
        c.CategoriaId = _DB["CategoriaId"]
        c.Nombre = _DB["Nombre"]
        c.FechaRegistro = _DB["FechaRegistro"]
        c.CodUsuario = _DB["CodUsuario"]
        c.EstadoRegistro = bool(ord(_DB['EstadoRegistro']))
        return c