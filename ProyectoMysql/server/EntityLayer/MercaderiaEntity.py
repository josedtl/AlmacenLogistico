from datetime import datetime
from pydantic import BaseModel, validator
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class MercaderiaMainModel(BaseModel):
    MercaderiaId: int = 0
    Codigo: str = ''
    NomCategoria: str = ''
    NomTipoProducto: str = ''
    NomMarca: str = ''
    NomModelo: str = ''
    Descripcion: str = ''
    NomUnidadMedida: str = ''
    FechaRegistro: datetime = datetime.now()
    CodUsuario: str = ''
    EstadoRegistro: bool = False

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


class MercaderiaSaveModel(BaseModel):
    MercaderiaId: int = 0
    Codigo: str = ''
    CategoriaId: int = 0
    TipoProductoId: int = 0
    MarcaId: int = 0
    ModeloId: int = 0
    Nombre: str = ''
    Descripcion: str = ''
    UnidadMedidaId: int = 0
    Reserva: float = 0
    Stock: float = 0
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
    
class MercaderiaItemCategoriaModel(BaseModel):
    MercaderiaId: int = 0
    Codigo: str = ''
    CategoriaId: int = 0
    Nombre: str = ''
    Descripcion: str = ''
    UnidadMedidaId: int = 0

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class MercaderiaItemOPModel(BaseModel):
    MercaderiaId: int = 0
    Nombre: str = ''
    CodigoUM: str = ''
    Descripcion: str = ''
    Stock: float = 0
    CategoriaId : int = 0

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)
