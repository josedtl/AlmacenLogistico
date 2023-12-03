from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class OrdenCompraDetalleSaveModel(BaseModel):
    OrdenCompraDetalleId: int 
    OrdenCompraId: int 
    ProductoId: int 
    UnidadMedidaId: int 
    Cantidad: float 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class OrdenCompraDetalleItemModel:
    OrdenCompraDetalleId: int 
    OrdenCompraId: int 
    ProductoId: int 
    UnidadMedidaId: int 
    Cantidad: float 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  OrdenCompraDetalleItemModel()
        c.OrdenCompraDetalleId = _DB["OrdenCompraDetalleId"] 
        c.OrdenCompraId = _DB["OrdenCompraId"] 
        c.ProductoId = _DB["ProductoId"] 
        c.UnidadMedidaId = _DB["UnidadMedidaId"] 
        c.Cantidad = _DB["Cantidad"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
