
from pydantic import BaseModel
from datetime import datetime

class DespachoMainModel(BaseModel):
    OrdenPedidoId: int
    Codigo: str
    Nombre: str
    NombreCompleto: str
    Documento: str
    FechaRegistro : datetime

class DespachoCabeceraModel(BaseModel):
    OrdenPedidoId: int
    NomProceso: str
    ProcesoId: int
    EntidadId: int
    NomResponsable: str

class DespachoDetalleModel(BaseModel):
    OrdenPedidoId: int = 0
    OrdenPedidoDetalleId: int = 0
    NomProducto: str = ""
    CodigoUM: str = ""
    CantidadSolicitado: int = 0
    CantidadReservado: int = 0
    CantidadAtendido: int = 0

class DespachoDetalleSaveModel(BaseModel):
    DespachoDetalleId: int = 0
    DespachoId: int = 0
    OrdenPedidoDetalleId: int = 0
    Cantidad: int = 0

class DespachoMainModel(BaseModel):
    OrdenPedidoId: int 
    Codigo: str 
    Nombre: str 
    NombreCompleto: str
    Documento: str
    FechaRegistro: datetime