from datetime import datetime
from pydantic import BaseModel, validator
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class MerListaSaveModel(BaseModel):
    ListaId: int = 0
    CampoId: int = 0
    Nombre: str = ''
    Codigo: str = ''
    Descripcion: str = ''
    FechaRegistro: datetime = datetime.now()
    CodUsuario: str = ''
    EstadoRegistro: bool = False
    Action: ProcessActionEnum = ProcessActionEnum.Loaded
    CodigoTabla: str = ''

    @validator('EstadoRegistro', pre=True)
    def convertir_a_bool(cls, v: any) -> bool:
        if isinstance(v, str):
            if v.lower() in ('true', '1'):
                return True
            elif v.lower() in ('false', '0'):
                return False
        return bool(v)
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)


class MerListaMainModel(BaseModel):
    ListaId: int = 0
    CampoId: int = 0
    Nombre: str = ''
    Codigo: str = ''
    Descripcion: str = ''
    FechaRegistro: datetime = datetime.now()
    CodUsuario: str = ''
    EstadoRegistro: bool = False
    Action: ProcessActionEnum = ProcessActionEnum.Loaded

    @validator('EstadoRegistro', pre=True)
    def convertir_a_bool(cls, v: any) -> bool:
        if isinstance(v, str):
            if v.lower() in ('true', '1'):
                return True
            elif v.lower() in ('false', '0'):
                return False
        return bool(v)
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)


class MerListaTituloModel(BaseModel):
    CampoId: int = 0
    Nombre: str = ''

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)


class MerListaItemModel(BaseModel):
    ListaId: int = 0
    CampoId: int = 0
    Nombre: str = 0
    Codigo: str = 0

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)
