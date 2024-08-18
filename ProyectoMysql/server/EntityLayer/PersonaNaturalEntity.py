from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class PersonaNaturalSaveModel(BaseModel):
    PersonaNaturalId: int = 0
    TipoDocumentoIdentidadId: int = 0 
    NumDocumento: str = ''
    Nombres: str = ''
    ApellidoPaterno: str = '' 
    ApellidoMaterno: str = ''
    FechaNacimiento: datetime = datetime.now()
    UbigeoId: int = 0
    Direccion: str = ''
    Telefono: str = ''
    Correo: str = ''
    SexoId: int = 0
    EstadoCivilId: int = 0 
    FechaRegistro: datetime = datetime.now()
    CodUsuario: str = ''
    EstadoRegistro: bool = False 
    Action: ProcessActionEnum = ProcessActionEnum.Loaded

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class PersonaNaturalMainModel(BaseModel):
    PersonaNaturalId: int = 0
    NomDocumento :str = ''
    NumDocumento: str = ''
    Nombres: str  = ''
    ApellidoPaterno: str = '' 
    ApellidoMaterno: str = ''
    FechaRegistro: datetime = datetime.now()
    CodUsuario: str = ''

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)


class PersonaNaturalEnlaceModel(BaseModel):
    PersonaNaturalId: int = 0
    TipoDocumentoIdentidadId: int = 0 
    NumDocumento: str = ''
    FechaRegistro: datetime = datetime.now() 
    CodUsuario: str = ''
    Nombres: str = ''
    ApellidoPaterno: str = '' 
    ApellidoMaterno: str = ''
    Action: ProcessActionEnum = ProcessActionEnum.Loaded

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)