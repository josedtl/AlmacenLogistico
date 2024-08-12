from datetime import datetime
from typing import Optional
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class DespachoMainModel(BaseModel):
    OrdenPedidoId: int = 0
    Codigo: str = ''
    Nombre: str = ''
    NombreCompleto: str = ''
    Documento: str = ''
    FechaRegistro: datetime = datetime.now ()
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class DespachoReservaOPModel(BaseModel):
    ReservaId: int = 0
    OrdenPedidoId: int = 0 
    OrdenPedidoDetalleId: int = 0 
    MercaderiaId: int = 0
    Cantidad: float = 0
    StockId: int = 0
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class DespachoDetalleSaveModel(BaseModel):
    DespachoDetalleId : int = 0
    DespachoId: int = 0
    OrdenPedidoDetalleId: int = 0 
    Cantidad : float = 0
    NomProducto: str = ''
    CodigoUM: str = ''
    CantidadSolicitado : float = 0
    CantidadAtendido : float = 0
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class DespachoSaveModel(BaseModel):
    DespachoId: int = 0
    OrdenPedidoId: int = 0 
    Codigo: str = ''
    EntidadEntregadoId : int = 0
    FechaHoraEntrega : datetime = datetime.now()
    FechaRegistro: str = ''
    Action: ProcessActionEnum = ProcessActionEnum.Loaded
    NomProceso: str = ''
    NomResponsable: str = ''
    DetalleItems : Optional[list[DespachoDetalleSaveModel]] = []

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)