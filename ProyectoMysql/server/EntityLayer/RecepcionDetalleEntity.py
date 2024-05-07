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
    Observacion: str
    FechaVencimiento: datetime
    NomProducto: str
    CodigoUM: str

    def CargarItem(_DB):
        c = RecepcionDetalleItemModel()
        c.RecepcionDetalleId = _DB["RecepcionDetalleId"]
        c.RecepcionId = _DB["RecepcionId"]
        c.MercaderiaId = _DB["MercaderiaId"]
        c.Cantidad = _DB["Cantidad"]
        c.Lote = _DB['Lote']
        c.FechaIngreso = _DB["FechaIngreso"]
        c.FechaRegistro = _DB["FechaRegistro"]
        c.Observacion = _DB["Observacion"]
        c.FechaVencimiento = _DB["FechaVencimiento"]
        c.NomProducto = _DB["NomProducto"]
        c.CodigoUM = _DB["CodigoUM"]
        return c
