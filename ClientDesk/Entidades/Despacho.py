
from pydantic import BaseModel
from datetime import datetime

class DespachoMainModel(BaseModel):
    OrdenPedidoId: int
    Codigo: str
    Nombre: str
    NombreCompleto: str
    Documento: str
    FechaRegistro : datetime