from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class OrdenCompraOrdenPedidoItemSaveModel(BaseModel):
    OrdenCompraOrdenPedidoItemId: int 
    OrdenCompraId: int 
    OrdenPedidoId: int 
    OrdenCompraDetalleId: int 
    OrdenPedidoDetalleId: int 
    MercaderiaId: int 
    Cantidad: float 
    Action: ProcessActionEnum

class OrdenCompraPedidoEnlaceItemModel:
    OrdenCompraOrdenPedidoItemId: int 
    OrdenCompraId: int 
    OrdenPedidoId: int 
    OrdenCompraDetalleId: int 
    OrdenPedidoDetalleId: int 
    MercaderiaId: int 
    Cantidad: float 

    def Cargar(_DB):
        c =  OrdenCompraPedidoEnlaceItemModel()
        c.OrdenCompraOrdenPedidoItemId = _DB["OrdenCompraOrdenPedidoItemId"] 
        c.OrdenCompraId = _DB["OrdenCompraId"] 
        c.OrdenPedidoId = _DB["OrdenPedidoId"] 
        c.OrdenCompraDetalleId = _DB["OrdenCompraDetalleId"] 
        c.OrdenPedidoDetalleId = _DB["OrdenPedidoDetalleId"] 
        c.MercaderiaId = _DB["MercaderiaId"] 
        c.Cantidad = _DB["Cantidad"] 
        return c
