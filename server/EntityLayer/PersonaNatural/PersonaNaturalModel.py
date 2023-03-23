from datetime import datetime
from pydantic import BaseModel
from EntityLayer.PersonaNatural.PersonaDetalle import PersonaNaturalSaveDetalle

class PersonaNaturalSave(BaseModel):
    PersonaId: int
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
    # Detalle: list[PersonaNaturalSaveDetalle]



