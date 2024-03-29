from datetime import datetime
from pydantic import BaseModel
from EntityLayer.RecepcionDetalleEntity import RecepcionDetalleSaveModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class RecepcionSaveModel(BaseModel):
    RecepcionId: int
    ProcesoId: int
    EstadoProcesoId: int
    Codigo: str
    EntidadId: int
    ObjetoId: int
    TipoRecepcionId: int
    TipoComprobanteId: int
    SerieComprobante: str
    CorrelativoComprobante: str
    FechaRecepcion: datetime
    FechaRegistro: datetime
    CodUsuario: str
    Action: ProcessActionEnum
    DetalleItems :list[RecepcionDetalleSaveModel]

class RecepcionItemModel:
    RecepcionId: int
    ProcesoId: int
    EstadoProcesoId: int
    Codigo: str
    EntidadId: int
    ObjetoId: int
    TipoRecepcionId: int
    TipoComprobanteId: int
    SerieComprobante: str
    CorrelativoComprobante: str
    FechaRecepcion: datetime
    FechaRegistro: datetime
    CodUsuario: str
    TipoRecepcion: str
    TipoComprobante: str

    def CargarMain(_DB):
        c = RecepcionItemModel()
        c.RecepcionId = _DB["RecepcionId"]
        c.Codigo = _DB["Codigo"]
        c.TipoRecepcion = _DB["TipoRecepcion"]
        c.TipoComprobante = _DB["TipoComprobante"]
        c.SerieComprobante = _DB["SerieComprobante"]
        c.CorrelativoComprobante = _DB["CorrelativoComprobante"]
        c.FechaRecepcion = _DB["FechaRecepcion"]
        c.FechaRegistro = _DB["FechaRegistro"]
        c.CodUsuario = _DB["CodUsuario"]
        return c
