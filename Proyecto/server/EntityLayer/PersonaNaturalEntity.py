from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class PersonaNaturalSaveModel(BaseModel):
    PersonaNaturalId: int 
    TipoDocumentoIdentidadId: int 
    NumDocumento: str 
    Nombres: str 
    ApellidoPaterno: str 
    ApellidoMaterno: str 
    FechaNacimiento: datetime 
    UbigeoId: int 
    Direccion: str 
    Telefono: str 
    Correo: str 
    SexoId: int 
    EstadoCivilId: int 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class PersonaNaturalItemModel:
    PersonaNaturalId: int 
    TipoDocumentoIdentidadId: int 
    NumDocumento: str 
    Nombres: str 
    ApellidoPaterno: str 
    ApellidoMaterno: str 
    FechaNacimiento: datetime 
    UbigeoId: int 
    Direccion: str 
    Telefono: str 
    Correo: str 
    SexoId: int 
    EstadoCivilId: int 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  PersonaNaturalItemModel()
        c.PersonaNaturalId = _DB["PersonaNaturalId"] 
        c.TipoDocumentoIdentidadId = _DB["TipoDocumentoIdentidadId"] 
        c.NumDocumento = _DB["NumDocumento"] 
        c.Nombres = _DB["Nombres"] 
        c.ApellidoPaterno = _DB["ApellidoPaterno"] 
        c.ApellidoMaterno = _DB["ApellidoMaterno"] 
        c.FechaNacimiento = _DB["FechaNacimiento"] 
        c.UbigeoId = _DB["UbigeoId"] 
        c.Direccion = _DB["Direccion"] 
        c.Telefono = _DB["Telefono"] 
        c.Correo = _DB["Correo"] 
        c.SexoId = _DB["SexoId"] 
        c.EstadoCivilId = _DB["EstadoCivilId"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c

    def CargarMain(_DB):
        c =  PersonaNaturalItemModel()
        c.PersonaNaturalId = _DB["PersonaNaturalId"] 
        c.NumDocumento = _DB["NumDocumento"] 
        c.Nombres = _DB["Nombres"] 
        c.ApellidoPaterno = _DB["ApellidoPaterno"] 
        c.ApellidoMaterno = _DB["ApellidoMaterno"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.NomDocumento = _DB["NomDocumento"] 
        return c

    def CargarBuscar(_DB):
        c =  PersonaNaturalItemModel()
        c.PersonaNaturalId = _DB["PersonaNaturalId"] 
        c.TipoDocumentoIdentidadId = _DB["TipoDocumentoIdentidadId"]
        c.NumDocumento = _DB["NumDocumento"] 
        c.Nombres = _DB["Nombres"] 
        c.ApellidoPaterno = _DB["ApellidoPaterno"] 
        c.ApellidoMaterno = _DB["ApellidoMaterno"] 
        return c
