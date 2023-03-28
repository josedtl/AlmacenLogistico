import datetime
from pydantic import BaseModel

class MarcaSaveEntity(BaseModel):
    MarcaId: int
    Nombre :str
    FechaRegistro:  datetime
    CodUsuario : str
    Estado: bool