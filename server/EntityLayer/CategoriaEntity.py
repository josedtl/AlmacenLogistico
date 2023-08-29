from datetime import datetime
from pydantic import BaseModel, constr
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum
from  EntityLayer.MyCode.CategoriaOtherEntity import CategoriaOtherEntity

class CategoriaEntity(BaseModel):
    CategoriaId: int
    Nombre: str
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool
    Action: ProcessActionEnum


class CategoriaItemEntity(CategoriaOtherEntity):
    CategoriaId: int
    Nombre: str
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool

    def CargarMain(_DB):
        c = CategoriaItemEntity()
        c.CategoriaId = _DB["CategoriaId"]
        c.Nombre = _DB["Nombre"]
        c.FechaRegistro = _DB["FechaRegistro"]
        c.CodUsuario = _DB["CodUsuario"]
        c.EstadoRegistro = bool(ord(_DB['EstadoRegistro']))
        return c

    def CargarLike(_DB):
        c = CategoriaItemEntity()
        c.CategoriaId = _DB["CategoriaId"]
        c.Nombre = _DB["Nombre"]
        return c
