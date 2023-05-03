from datetime import datetime
from pydantic import BaseModel

class TipoProductoSaveEntity(BaseModel):
    TipoProductoId: int
    Nombre :str
    FechaRegistro:  datetime
    CodUsuario : str
    Estado: bool
    Action: int