
from pydantic import BaseModel
from datetime import datetime

class EntListaEntity(BaseModel):
    OrdenPedidoId: int
    Codigo: str
    Nombre: str
    NombreCompleto: str
    Documento: str
    FechaRegistro : datetime