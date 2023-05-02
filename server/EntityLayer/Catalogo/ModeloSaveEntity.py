from datetime import datetime
from pydantic import BaseModel

class ModeloSaveEntity(BaseModel):
    ModeloId: int
    Nombre :str
    FechaRegistro:  datetime
    CodUsuario : str
    Estado: bool
    Action: int