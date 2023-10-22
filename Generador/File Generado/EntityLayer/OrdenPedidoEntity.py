from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class OrdenPedidoSaveModel(BaseModel):
    OrdenPedidoId: int 
    ProcesoId: int 
    TipoProcesoId: int 
    EstadoProcesoId: int 
    Codigo: str 
    ResponsableId: int 
    NumDocumentoResponsable: str 
    NomResponsable: str 
    FechaEmision: datetime 
    BloqueoEdicionOtros: bool 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class OrdenPedidoItemModel:
    OrdenPedidoId: int 
    ProcesoId: int 
    TipoProcesoId: int 
    EstadoProcesoId: int 
    Codigo: str 
    ResponsableId: int 
    NumDocumentoResponsable: str 
    NomResponsable: str 
    FechaEmision: datetime 
    BloqueoEdicionOtros: bool 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  OrdenPedidoItemModel()
        c.OrdenPedidoId = _DB["OrdenPedidoId"] 
        c.ProcesoId = _DB["ProcesoId"] 
        c.TipoProcesoId = _DB["TipoProcesoId"] 
        c.EstadoProcesoId = _DB["EstadoProcesoId"] 
        c.Codigo = _DB["Codigo"] 
        c.ResponsableId = _DB["ResponsableId"] 
        c.NumDocumentoResponsable = _DB["NumDocumentoResponsable"] 
        c.NomResponsable = _DB["NomResponsable"] 
        c.FechaEmision = _DB["FechaEmision"] 
        c.BloqueoEdicionOtros = bool(ord(_DB["BloqueoEdicionOtros"])) 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
