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

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class PersonaNaturalMainModel(BaseModel):
    PersonaNaturalId: int 
    NomDocumento :str
    NumDocumento: str 
    Nombres: str 
    ApellidoPaterno: str 
    ApellidoMaterno: str 
    FechaRegistro: datetime 
    CodUsuario: str 

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)


class PersonaNaturalEnlaceModel(BaseModel):
    PersonaNaturalId: int 
    TipoDocumentoIdentidadId: int 
    NumDocumento: str 
    FechaRegistro: datetime 
    CodUsuario: str 
    Nombres: str 
    ApellidoPaterno: str 
    ApellidoMaterno: str 
    Action: ProcessActionEnum

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)