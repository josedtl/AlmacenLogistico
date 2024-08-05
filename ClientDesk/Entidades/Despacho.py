
from typing import List
from pydantic import BaseModel
from datetime import datetime

class DespachoMainModel(BaseModel):
    OrdenPedidoId: int
    Codigo: str
    Nombre: str
    NombreCompleto: str
    Documento: str
    FechaRegistro : datetime


class DespachoReservaOPModel(BaseModel):
    ReservaId: int 
    OrdenPedidoId: int 
    OrdenPedidoDetalleId: int 
    MercaderiaId: int 
    Cantidad: float    
    StockId: int    
    
class DespachoDetalleModel(BaseModel):
    OrdenPedidoId: int = 0
    OrdenPedidoDetalleId: int = 0
    NomProducto: str = ""
    CodigoUM: str = ""
    CantidadSolicitado: float = 0
    Cantidad: float = 0
    CantidadAtendido: float = 0
    DetalleReservaItem : List[DespachoReservaOPModel] = []


class DespachoCabeceraModel(BaseModel):
    OrdenPedidoId: int
    NomProceso: str
    ProcesoId: int
    EntidadId: int 
    NomResponsable: str
    DetalleItems :List[DespachoDetalleModel] = []


    

class DespachoDetalleSaveModel(BaseModel):
    DespachoDetalleId: int = 0
    DespachoId: int = 0
    OrdenPedidoDetalleId: int = 0
    Cantidad: float = 0
    

class DespachoMainModel(BaseModel):
    OrdenPedidoId: int 
    Codigo: str 
    Nombre: str 
    NombreCompleto: str
    Documento: str
    FechaRegistro: datetime
    
    

