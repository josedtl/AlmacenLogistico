from datetime import datetime
from pydantic import BaseModel
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
