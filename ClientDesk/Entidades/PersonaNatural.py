from pydantic import BaseModel
from datetime import datetime

class EntListaEntity(BaseModel):
    ListaId: int
    CampoId: int
    Nombre: str
    Codigo: str

class PersonaNaturalEntity(BaseModel):
    PersonaNaturalId: int 
    NomDocumento: str 
    NumDocumento: str
    Nombres: str
    ApellidoPaterno: str 
    ApellidoMaterno: str 
    FechaRegistro: datetime
    CodUsuario: str 


class PersonaNaturalSaveModel(BaseModel):
    PersonaNaturalId: int
    TipoDocumentoIdentidadId: int
    NumDocumento: str
    FechaRegistro: datetime
    CodUsuario: str
    UbigeoId: int
    Nombres: str
    ApellidoPaterno: str
    ApellidoMaterno: str
    FechaNacimiento: datetime
    Direccion: str
    Telefono: str
    Correo: str
    SexoId: int
    EstadoCivilId: int
    Action: int
    EstadoRegistro: bool