from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class MarcaEntity(BaseModel):
    MarcaId: int
    Nombre: str
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool
    Action: ProcessActionEnum

class MarcaItemEntity():
    MarcaId: int
    Nombre: str
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool

    def CargarMain( _DB):
        c = MarcaItemEntity()
        c.MarcaId = _DB['MarcaId']
        c.Nombre = _DB['Nombre']
        c.FechaRegistro = _DB['FechaRegistro']
        c.CodUsuario = _DB['CodUsuario']
        c.EstadoRegistro = bool(ord(_DB['EstadoRegistro']))
        return c
