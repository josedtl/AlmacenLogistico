from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class TarifaProductoSaveModel(BaseModel):
    TarifaProductoId: int 
    ProductoId: int 
    UnidaMedidaId: int 
    MonedaId: int 
    ValorCompra: float 
    ValorVenta: float 
    FechaRegistro: datetime 
    FechaVigencia: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class TarifaProductoItemModel:
    TarifaProductoId: int 
    ProductoId: int 
    UnidaMedidaId: int 
    MonedaId: int 
    ValorCompra: float 
    ValorVenta: float 
    FechaRegistro: datetime 
    FechaVigencia: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  TarifaProductoItemModel()
        c.TarifaProductoId = _DB["TarifaProductoId"] 
        c.ProductoId = _DB["ProductoId"] 
        c.UnidaMedidaId = _DB["UnidaMedidaId"] 
        c.MonedaId = _DB["MonedaId"] 
        c.ValorCompra = _DB["ValorCompra"] 
        c.ValorVenta = _DB["ValorVenta"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.FechaVigencia = _DB["FechaVigencia"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
