from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum
from EntityLayer.OrdenPedidoDetalleEntity import OrdenPedidoDetalleSaveModel

class OrdenPedidoSaveModel(BaseModel):
    OrdenPedidoId: int = 0 
    ProcesoId: int = 0 
    TipoProcesoId: int = 0 
    EstadoProcesoId: int = 0 
    Codigo: str = ''
    EntidadId: int = 0 
    NumDocumentoResponsable: str = ''
    NomResponsable: str = ''
    FechaEmision: datetime = datetime.now()
    FechaRegistro: datetime = datetime.now()
    FechaModificacion: datetime = datetime.now()
    CodUsuario: str = ''
    Action: ProcessActionEnum = ProcessActionEnum.Loaded
    NomEstadoProceso: str = ''
    DetalleItems :list[OrdenPedidoDetalleSaveModel] = []
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)
    
class OrdenPedidoMainModel(BaseModel):
    OrdenPedidoId: int = 0 
    Codigo: str = ''
    EntidadId: int = 0 
    NumDocumentoResponsable: str = ''
    NomResponsable: str = ''
    FechaEmision: str = ''
    FechaRegistro: datetime  = datetime.now()
    CodUsuario: str = ''
    NomEstadoProceso : str
    ValorEstadoProceso :int = 0
    NomProceso: str = ''

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class OrdenPedidoFiltroOCOModel(BaseModel):
    OrdenPedidoId: int = 0 
    Codigo: str = ''
    EntidadId: int = 0 
    NomProceso: str = ''
    NomResponsable: str = ''
    FechaEmision: datetime 

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)
    
class OrdenPedidoFiltroOCDModel(BaseModel):
    OrdenPedidoDetalleId: int = 0 
    OrdenPedidoId: int = 0 
    Codigo: str = ''
    ProcesoId: int = 0 
    NomProceso: str = ''
    MercaderiaId: int = 0 
    NomMercaderia: str = ''
    UnidadMedidaId :int = 0
    NomUnidad : str
    CantidadSolicitado: float = 0

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)
    
class OrdenPedidoDetalleSaveModel(BaseModel):
    OrdenPedidoDetalleId: int = 0 
    OrdenPedidoId: int = 0 
    MercaderiaId: int = 0 
    UnidadMedidaId: int = 0   
    CantidadSolicitado: float = 0
    CantidadReservado: float = 0
    CantidadFaltante: float = 0
    CantidadAtendido: float = 0
    Enlazado: bool = False
    Atendido: bool = False
    NomProducto: str = ''
    CategoriaId: int = 0 
    CodigoUM: str = ''
    Stock: float = 0 
    Action: ProcessActionEnum = ProcessActionEnum.Loaded

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)