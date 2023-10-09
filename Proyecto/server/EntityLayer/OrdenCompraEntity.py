from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class OrdenCompraSaveModel(BaseModel):
    OrdenCompraId: int 
    ProcesoId: int 
    EstadoProcesoId: int 
    Codigo: str 
    EsEmpresaProveedor: bool 
    ProveedorId: int 
    Observacion: str 
    FechaEmision: datetime 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class OrdenCompraItemModel:
    OrdenCompraId: int 
    ProcesoId: int 
    EstadoProcesoId: int 
    Codigo: str 
    EsEmpresaProveedor: bool 
    ProveedorId: int 
    Observacion: str 
    FechaEmision: datetime 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  OrdenCompraItemModel()
        c.OrdenCompraId = _DB["OrdenCompraId"] 
        c.ProcesoId = _DB["ProcesoId"] 
        c.EstadoProcesoId = _DB["EstadoProcesoId"] 
        c.Codigo = _DB["Codigo"] 
        c.EsEmpresaProveedor = bool(ord(_DB["EsEmpresaProveedor"])) 
        c.ProveedorId = _DB["ProveedorId"] 
        c.Observacion = _DB["Observacion"] 
        c.FechaEmision = _DB["FechaEmision"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
