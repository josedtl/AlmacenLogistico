from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class OrdenPedidoDetalleSaveModel(BaseModel):
    OrdenPedidoDetalleId: int 
    OrdenPedidoId: int 
    MercaderiaId: int 
    UnidadMedidaId: int 
    CantidadSolicitado: float 
    CantidadReservado: float 
    CantidadFaltante: float 
    CantidadAtendido: float 
    Enlazado: bool 
    Atendido: bool 
    Action: ProcessActionEnum


class OrdenPedidoDetalleItemModel:
    OrdenPedidoDetalleId: int 
    OrdenPedidoId: int 
    MercaderiaId: int 
    UnidadMedidaId: int 
    CantidadSolicitado: float 
    CantidadReservado: float 
    CantidadFaltante: float 
    CantidadAtendido: float 
    Enlazado: bool 
    Atendido: bool 
    NomProducto: str
    CategoriaId: int
    CodigoUM: str
    Stock: float
    # Guid: str

    def Cargar(_DB):
        c = OrdenPedidoDetalleItemModel()
        c.OrdenPedidoDetalleId = _DB["OrdenPedidoDetalleId"]
        c.OrdenPedidoId = _DB["OrdenPedidoId"]
        c.MercaderiaId = _DB["MercaderiaId"]
        c.UnidadMedidaId = _DB["UnidadMedidaId"]
        c.CantidadSolicitado = _DB["CantidadSolicitado"]
        c.CantidadReservado = _DB["CantidadReservado"]
        c.CantidadFaltante = _DB["CantidadFaltante"]
        c.CantidadAtendido = _DB["CantidadAtendido"]
        c.Enlazado = bool(ord(_DB["Enlazado"]))
        c.Atendido = bool(ord(_DB["Atendido"]))
        return c

    def CargarCabecera(_DB):
        c = OrdenPedidoDetalleItemModel()
        c.OrdenPedidoDetalleId = _DB["OrdenPedidoDetalleId"]
        c.OrdenPedidoId = _DB["OrdenPedidoId"]
        c.MercaderiaId = _DB["MercaderiaId"]
        c.UnidadMedidaId = _DB["UnidadMedidaId"]
        c.CantidadSolicitado = _DB["CantidadSolicitado"]
        c.CantidadReservado = _DB["CantidadReservado"]
        c.CantidadFaltante = _DB["CantidadFaltante"]
        c.CantidadAtendido = _DB["CantidadAtendido"]
        c.Enlazado = bool(ord(_DB["Enlazado"]))
        c.Atendido = bool(ord(_DB["Atendido"]))
        c.NomProducto = _DB["NomProducto"]
        c.CategoriaId = _DB["CategoriaId"]
        c.CodigoUM = _DB["CodigoUM"]
        c.Stock = _DB["Stock"]
        # c.Guid=''
        return c
