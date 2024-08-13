from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class EmpresaSaveModel(BaseModel):
    EmpresaId: int = 0
    TipoDocumentoIdentidadId: int = 0
    NumDocumento: str = ''
    Nombres: str = ''
    NombreComercial: str = ''
    UbigeoId: int = 0
    Direccion: str = ''
    Telefono: str = ''
    Correo: str = ''
    FechaRegistro: datetime =datetime.now()
    CodUsuario: str = ''
    EstadoRegistro: bool = False
    Action: ProcessActionEnum = ProcessActionEnum.Loaded

class EmpresaMainModel(BaseModel):
    EmpresaId: int = 0 
    NomDocumento: str = ''
    NumDocumento: str = ''
    Nombres: str = ''
    NombreComercial: str = ''
    FechaRegistro: datetime =datetime.now() 
    CodUsuario: str = ''

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class EmpresaEnlaceModel(BaseModel):
    EmpresaId: int = 0
    TipoDocumentoIdentidadId: int = 0
    NumDocumento: str = ''
    NombreComercial: str = ''
    FechaRegistro: datetime =datetime.now()
    CodUsuario: str = ''
    Action: ProcessActionEnum = ProcessActionEnum.Loaded

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)