from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class OrdenCompraDetalleSaveModel (BaseModel):
    OrdenCompraDetalleId: int = 0
    OrdenCompraId: int = 0
    MercaderiaId: int = 0
    UnidadMedidaId: int = 0
    CantidadSolicitado: float = 0
    CantidadComprado: float = 0
    CantidadFaltante: float = 0
    PrecioUnitario: float = 0
    NomProducto: str = ''
    CategoriaId: int = 0
    CodigoUM: str = ''
    Stock: float = 0

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)
    
class OrdenCompraSaveModel(BaseModel):
    OrdenCompraId: int = 0
    ProcesoId: int = 0
    EstadoProcesoId: int = 0
    TipoProcesoId: int = 0
    Codigo: str = ''
    EntidadId: int = 0
    NumDocumentoProveedor: str = ''
    NomProveedor: str = ''
    FechaEmision: datetime = datetime.now()
    FechaRegistro: datetime = datetime.now()
    CodUsuario: str = ''
    Action: ProcessActionEnum = ProcessActionEnum.Loaded
    NomEstadoProceso: str = ''
    DetalleItems: list[OrdenCompraDetalleSaveModel] = []

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class OrdenCompraMainModel(BaseModel):
    OrdenCompraId: int = 0
    Codigo: str  = ''
    NumDocumentoProveedor: str = ''
    NomProveedor: str = ''
    FechaEmision: datetime = datetime.now()
    FechaRegistro: datetime = datetime.now()
    CodUsuario: str = ''
    NomEstadoProceso: str = ''
    ValorEstadoProceso: int = 0

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)


