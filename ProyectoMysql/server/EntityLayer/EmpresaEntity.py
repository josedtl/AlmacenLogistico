from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class EmpresaSaveModel(BaseModel):
    EmpresaId: int 
    TipoDocumentoIdentidadId: int 
    NumDocumento: str 
    Nombres: str 
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
    NomDocumento: str
    NumDocumento: str 
    Nombres: str 
    NombreComercial: str 
    UbigeoId: int 
    Direccion: str 
    Telefono: str 
    Correo: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    
    def Cargar(_DB):
        c =  EmpresaItemModel()
        c.EmpresaId = _DB["EmpresaId"] 
        c.TipoDocumentoIdentidadId = _DB["TipoDocumentoIdentidadId"] 
        c.NumDocumento = _DB["NumDocumento"] 
        c.Nombres = _DB["Nombres"] 
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
        c.NomDocumento = _DB["NomDocumento"] 
        c.NumDocumento = _DB["NumDocumento"] 
        c.Nombres = _DB["Nombres"] 
        c.NombreComercial = _DB["NombreComercial"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        return c