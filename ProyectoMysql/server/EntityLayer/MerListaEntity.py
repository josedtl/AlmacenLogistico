from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class MerListaSaveModel(BaseModel):
    ListaId: int
    CampoId: int
    Nombre: str
    Codigo: str
    Descripcion: str
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool
    Action: ProcessActionEnum
    CodigoTabla: str
