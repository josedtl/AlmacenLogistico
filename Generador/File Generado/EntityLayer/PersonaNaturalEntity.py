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
    FechaVencimiento: datetime 
    TipoSexoId: int 
    EstadoCivilId: int 
    Direccion: str 
    DireccionReferencia: str 
    UbigeoId: int 
    FechaRegistro: datetime 
    UsuarioRegistro: str 
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
    FechaVencimiento: datetime 
    TipoSexoId: int 
    EstadoCivilId: int 
    Direccion: str 
    DireccionReferencia: str 
    UbigeoId: int 
    FechaRegistro: datetime 
    UsuarioRegistro: str 
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
        c.FechaVencimiento = _DB["FechaVencimiento"] 
        c.TipoSexoId = _DB["TipoSexoId"] 
        c.EstadoCivilId = _DB["EstadoCivilId"] 
        c.Direccion = _DB["Direccion"] 
        c.DireccionReferencia = _DB["DireccionReferencia"] 
        c.UbigeoId = _DB["UbigeoId"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.UsuarioRegistro = _DB["UsuarioRegistro"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
