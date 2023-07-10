from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class TipoProductoEntity(BaseModel):
    TipoProductoId: int
    Nombre: str
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool
    Action: ProcessActionEnum


class TipoProductoItemEntity():
    TipoProductoId: int
    Nombre: str
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool

    def CargarMain( _DB):
        c = TipoProductoItemEntity()
        c.TipoProductoId = _DB['TipoProductoId']
        c.Nombre = _DB['Nombre']
        c.FechaRegistro = _DB['FechaRegistro']
        c.CodUsuario = _DB['CodUsuario']
        c.EstadoRegistro = bool(ord(_DB['EstadoRegistro']))
        return c
