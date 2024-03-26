from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class RecepcionDetalleSaveModel(BaseModel):
    RecepcionDetalleId: int
    RecepcionId: int
    MercaderiaId: int
    Cantidad: float
    Lote: str
    FechaIngreso: datetime
    FechaRegistro: datetime
    FechaVencimiento: datetime
    Observacion: str
    Action: ProcessActionEnum


class RecepcionDetalleItemModel:
    RecepcionDetalleId: int
    RecepcionId: int
    MercaderiaId: int
    Cantidad: float
    Lote: str
    FechaIngreso: datetime
    FechaRegistro: datetime
    FechaVencimiento: datetime
    Observacion: str
