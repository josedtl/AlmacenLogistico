from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class ModeloEntity(BaseModel):
    ModeloId: int
    Nombre: str
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool
    Action: ProcessActionEnum

class ModeloItemEntity():
    ModeloId: int
    Nombre: str
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool

    def CargarMain(_DB):
        c = ModeloItemEntity()
        c.ModeloId = _DB['ModeloId']
        c.Nombre = _DB['Nombre']
        c.FechaRegistro = _DB['FechaRegistro']
        c.CodUsuario = _DB['CodUsuario']
        c.EstadoRegistro = bool(ord(_DB['EstadoRegistro']))
        return c
