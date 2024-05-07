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
    TipoComprobanteId: int
    SerieComprobante: str
    CorrelativoComprobante: str
    FechaRecepcion: datetime
    FechaRegistro: datetime
    CodUsuario: str
    Action: ProcessActionEnum
    DetalleItems :list[RecepcionDetalleSaveModel]
    Observacion : str

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
    Observacion : str
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

    def CargarItem(_DB):
        c = RecepcionItemModel()
        c.RecepcionId = _DB["RecepcionId"]
        c.ProcesoId = _DB["ProcesoId"]
        c.EstadoProcesoId = _DB["EstadoProcesoId"]
        c.Codigo = _DB["Codigo"]
        c.EntidadId = _DB['EntidadId']
        c.TipoComprobanteId = _DB["TipoComprobanteId"]
        c.SerieComprobante = _DB["SerieComprobante"]
        c.CorrelativoComprobante = _DB["CorrelativoComprobante"]
        c.FechaRecepcion = _DB["FechaRecepcion"]
        c.FechaRegistro = _DB["FechaRegistro"]
        c.CodUsuario = _DB["CodUsuario"]
        c.Observacion = _DB["Observacion"]
        return c
