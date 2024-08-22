from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class RecepcionDetalleSaveModel(BaseModel):
    RecepcionDetalleId: int = 0
    RecepcionId: int = 0
    MercaderiaId: int = 0
    Cantidad: float = 0
    Lote: str = ''
    FechaIngreso: datetime = datetime.now()
    FechaRegistro: datetime = datetime.now()
    FechaVencimiento: datetime = datetime.now()
    Observacion: str = ''
    Action: ProcessActionEnum = ProcessActionEnum.Loaded
    NomProducto: str = ''
    CodigoUM: str = ''
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class RecepcionSaveModel(BaseModel):
    RecepcionId: int = 0
    ProcesoId: int = 0
    EstadoProcesoId: int = 0
    Codigo: str = ''
    EntidadId: int = 0
    ObjetoId: int = 0
    TipoComprobanteId: int = 0
    SerieComprobante: str = ''
    CorrelativoComprobante: str = ''
    FechaRecepcion: datetime = datetime.now()
    FechaRegistro: datetime = datetime.now()
    CodUsuario: str = ''
    Observacion : str = ''
    Action: ProcessActionEnum = ProcessActionEnum.Loaded
    ValorEstadoProceso : int = ''
    NomEstadoProceso : str = ''
    DetalleItems :list[RecepcionDetalleSaveModel] = []
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class RecepcionMainModel(BaseModel):
    RecepcionId: int  = 0
    Codigo: str = ''
    TipoRecepcion: str = ''
    TipoComprobante: str = ''
    SerieComprobante: str = ''
    CorrelativoComprobante: str = ''
    FechaRecepcion: datetime = datetime.now()
    FechaRegistro: datetime = datetime.now()
    CodUsuario: str = ''
    ValorEstadoProceso: int = 0 
    NomEstadoProceso: str = ''
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)