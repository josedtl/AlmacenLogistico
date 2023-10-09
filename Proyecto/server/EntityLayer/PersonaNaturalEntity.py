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
    Genero: int 
    EstadoCivil: int 
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
    Genero: int 
    EstadoCivil: int 
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
        c.Genero = _DB["Genero"] 
        c.EstadoCivil = _DB["EstadoCivil"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
