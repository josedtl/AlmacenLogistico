from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class OrdenPedidoSaveModel(BaseModel):
    OrdenPedidoId: int 
    TipoProcesoId: int 
    Codigo: str 
    EsEmpresaCliente: bool 
    ClienteId: int 
    ProcesoId: int 
    EstadoProcesoId: int 
    FechaEmision: datetime 
    CantidadTotal: float 
    BloqueoEdicionOtros: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class OrdenPedidoItemModel:
    OrdenPedidoId: int 
    TipoProcesoId: int 
    Codigo: str 
    EsEmpresaCliente: bool 
    ClienteId: int 
    ProcesoId: int 
    EstadoProcesoId: int 
    FechaEmision: datetime 
    CantidadTotal: float 
    BloqueoEdicionOtros: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  OrdenPedidoItemModel()
        c.OrdenPedidoId = _DB["OrdenPedidoId"] 
        c.TipoProcesoId = _DB["TipoProcesoId"] 
        c.Codigo = _DB["Codigo"] 
        c.EsEmpresaCliente = bool(ord(_DB["EsEmpresaCliente"])) 
        c.ClienteId = _DB["ClienteId"] 
        c.ProcesoId = _DB["ProcesoId"] 
        c.EstadoProcesoId = _DB["EstadoProcesoId"] 
        c.FechaEmision = _DB["FechaEmision"] 
        c.CantidadTotal = _DB["CantidadTotal"] 
        c.BloqueoEdicionOtros = _DB["BloqueoEdicionOtros"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
