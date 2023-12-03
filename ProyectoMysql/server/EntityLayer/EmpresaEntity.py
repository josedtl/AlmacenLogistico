from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class EmpresaSaveModel(BaseModel):
    EmpresaId: int 
    TipoDocumentoIdentidadId: int 
    NumeroDocumento: str 
    RazonSocial: str 
    NombreComercial: str 
    UbigeoId: int 
    Direccion: str 
    Telefono: str 
    Correo: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class EmpresaItemModel:
    EmpresaId: int 
    TipoDocumentoIdentidadId: int 
    NumeroDocumento: str 
    RazonSocial: str 
    NombreComercial: str 
    UbigeoId: int 
    Direccion: str 
    Telefono: str 
    Correo: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    NomDocumento: str
    
    def Cargar(_DB):
        c =  EmpresaItemModel()
        c.EmpresaId = _DB["EmpresaId"] 
        c.TipoDocumentoIdentidadId = _DB["TipoDocumentoIdentidadId"] 
        c.NumeroDocumento = _DB["NumeroDocumento"] 
        c.RazonSocial = _DB["RazonSocial"] 
        c.NombreComercial = _DB["NombreComercial"] 
        c.UbigeoId = _DB["UbigeoId"] 
        c.Direccion = _DB["Direccion"] 
        c.Telefono = _DB["Telefono"] 
        c.Correo = _DB["Correo"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c

    def MainCargar(_DB):
        c =  EmpresaItemModel()
        c.EmpresaId = _DB["EmpresaId"] 
        c.TipoDocumentoIdentidadId = _DB["TipoDocumentoIdentidadId"] 
        c.NumeroDocumento = _DB["NumeroDocumento"] 
        c.RazonSocial = _DB["RazonSocial"] 
        c.NombreComercial = _DB["NombreComercial"] 
        c.UbigeoId = _DB["UbigeoId"] 
        c.Direccion = _DB["Direccion"] 
        c.Telefono = _DB["Telefono"] 
        c.Correo = _DB["Correo"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        c.NomDocumento = _DB["NomDocumento"] 
        return c