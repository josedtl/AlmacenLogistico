from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class OrdenCompraDetalleSaveModel(BaseModel):
    OrdenCompraDetalleId: int 
    OrdenCompraId: int 
    MercaderiaId: int 
    UnidadMedidaId: int 
    CantidadSolicitado: float 
    CantidadComprado: float 
    CantidadFaltante : float 
    PrecioUnitario: float 
    Action: ProcessActionEnum

class OrdenCompraDetalleItemModel:
    OrdenCompraDetalleId: int 
    OrdenCompraId: int 
    MercaderiaId: int 
    UnidadMedidaId: int 
    CantidadSolicitado: float 
    CantidadComprado: float 
    CantidadFaltante : float 
    PrecioUnitario: float 

    def Cargar(_DB):
        c =  OrdenCompraDetalleItemModel()
        c.OrdenCompraDetalleId = _DB["OrdenCompraDetalleId"] 
        c.OrdenCompraId = _DB["OrdenCompraId"] 
        c.MercaderiaId = _DB["MercaderiaId"] 
        c.UnidadMedidaId = _DB["UnidadMedidaId"] 
        c.CantidadSolicitado = _DB["CantidadSolicitado"] 
        c.CantidadComprado = _DB["CantidadComprado"] 
        c.CantidadFaltante = _DB["CantidadFaltante"] 
        c.PrecioUnitario = _DB["PrecioUnitario"] 
        return c
