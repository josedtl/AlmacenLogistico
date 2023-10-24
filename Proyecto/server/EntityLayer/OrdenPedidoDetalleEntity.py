from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class OrdenPedidoDetalleSaveModel(BaseModel):
    OrdenPedidoDetalleId: int 
    OrdenPedidoId: int 
    ProductoId: int 
    UnidadMedidaId: int 
    CantidadSolicitado: float 
    CantidadReservado: float 
    CantidadFaltante: float 
    CantidadAtendido: float 
    Enlazado: bool 
    EsAtendido: bool 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum


class OrdenPedidoDetalleItemModel:
    OrdenPedidoDetalleId: int 
    OrdenPedidoId: int 
    ProductoId: int 
    UnidadMedidaId: int 
    CantidadSolicitado: float 
    CantidadReservado: float 
    CantidadFaltante: float 
    CantidadAtendido: float 
    Enlazado: bool 
    EsAtendido: bool 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    NomProducto: str
    CategoriaId: int
    CodigoUM: str
    Stock: float
    # Guid: str

    def Cargar(_DB):
        c = OrdenPedidoDetalleItemModel()
        c.OrdenPedidoDetalleId = _DB["OrdenPedidoDetalleId"]
        c.OrdenPedidoId = _DB["OrdenPedidoId"]
        c.ProductoId = _DB["ProductoId"]
        c.UnidadMedidaId = _DB["UnidadMedidaId"]
        c.CantidadSolicitado = _DB["CantidadSolicitado"]
        c.CantidadReservado = _DB["CantidadReservado"]
        c.CantidadFaltante = _DB["CantidadFaltante"]
        c.CantidadAtendido = _DB["CantidadAtendido"]
        c.Enlazado = bool(ord(_DB["Enlazado"]))
        c.EsAtendido = bool(ord(_DB["EsAtendido"]))
        c.FechaRegistro = _DB["FechaRegistro"]
        c.CodUsuario = _DB["CodUsuario"]
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"]))
        return c

    def CargarCabecera(_DB):
        c = OrdenPedidoDetalleItemModel()
        c.OrdenPedidoDetalleId = _DB["OrdenPedidoDetalleId"]
        c.OrdenPedidoId = _DB["OrdenPedidoId"]
        c.ProductoId = _DB["ProductoId"]
        c.UnidadMedidaId = _DB["UnidadMedidaId"]
        c.CantidadSolicitado = _DB["CantidadSolicitado"]
        c.CantidadReservado = _DB["CantidadReservado"]
        c.CantidadFaltante = _DB["CantidadFaltante"]
        c.CantidadAtendido = _DB["CantidadAtendido"]
        c.Enlazado = bool(ord(_DB["Enlazado"]))
        c.EsAtendido = bool(ord(_DB["EsAtendido"]))
        c.FechaRegistro = _DB["FechaRegistro"]
        c.CodUsuario = _DB["CodUsuario"]
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"]))
        c.NomProducto = _DB["NomProducto"]
        c.CategoriaId = _DB["CategoriaId"]
        c.CodigoUM = _DB["CodigoUM"]
        c.Stock = _DB["Stock"]
        # c.Guid=''
        return c
