from datetime import datetime
from EntityLayer.OrdenCompraDetalleEntity import OrdenCompraDetalleSaveModel
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class OrdenCompraSaveModel(BaseModel):
    OrdenCompraId: int 
    ProcesoId: int 
    EstadoProcesoId: int 
    Codigo: str 
    EntidadId: int 
    NumDocumentoProveedor: str 
    NomProveedor: str 
    FechaEmision: datetime 
    FechaRegistro: datetime 
    CodUsuario: str 
    Action: ProcessActionEnum
    DetalleItems :list[OrdenCompraDetalleSaveModel]
    
class OrdenCompraItemModel:
    OrdenCompraId: int 
    ProcesoId: int 
    EstadoProcesoId: int 
    Codigo: str 
    EntidadId: int 
    NumDocumentoProveedor: str 
    NomProveedor: str 
    FechaEmision: datetime 
    FechaRegistro: datetime 
    CodUsuario: str 
    NomEstadoProceso : str
    ValorEstadoProceso :int
    
    def Cargar(_DB):
        c =  OrdenCompraItemModel()
        c.OrdenCompraId = _DB["OrdenCompraId"] 
        c.ProcesoId = _DB["ProcesoId"] 
        c.EstadoProcesoId = _DB["EstadoProcesoId"] 
        c.Codigo = _DB["Codigo"] 
        c.NumDocumentoProveedor = _DB["NumDocumentoProveedor"] 
        c.NomProveedor = _DB["NomProveedor"] 
        c.EntidadId = _DB["EntidadId"] 
        c.FechaEmision = _DB["FechaEmision"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        return c


    def CargarMain(_DB):
        c =  OrdenCompraItemModel()
        c.OrdenCompraId = _DB["OrdenCompraId"] 
        c.Codigo = _DB["Codigo"] 
        c.NumDocumentoProveedor = _DB["NumDocumentoProveedor"] 
        c.NomProveedor = _DB["NomProveedor"] 
        c.FechaEmision = _DB["FechaEmision"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.NomEstadoProceso = _DB["NomEstadoProceso"] 
        c.ValorEstadoProceso = _DB["ValorEstadoProceso"] 
        return c