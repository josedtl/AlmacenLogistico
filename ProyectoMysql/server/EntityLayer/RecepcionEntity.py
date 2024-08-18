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
    NomProducto: str
    CodigoUM: str
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

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
    Observacion : str
    DetalleItems :list[RecepcionDetalleSaveModel]
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class RecepcionItemModel(BaseModel):
    RecepcionId: int
    Codigo: str
    TipoRecepcionId: int
    TipoComprobanteId: int
    SerieComprobante: str
    CorrelativoComprobante: str
    FechaRecepcion: datetime
    FechaRegistro: datetime
    CodUsuario: str
    ValorEstadoProceso: int
    NomEstadoProceso: str
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)