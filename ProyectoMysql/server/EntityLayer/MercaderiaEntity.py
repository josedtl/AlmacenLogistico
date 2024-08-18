from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class MercaderiaMainModel(BaseModel):
    MercaderiaId: int
    Codigo: str
    NomCategoria: int
    NomTipoProducto: int
    NomMarca: int
    NomModelo: int
    Descripcion: str
    NomUnidadMedida: str
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)


class MercaderiaSaveModel(BaseModel):
    MercaderiaId: int
    Codigo: str
    CategoriaId: int
    TipoProductoId: int
    MarcaId: int
    ModeloId: int
    Nombre: str
    Descripcion: str
    UnidadMedidaId: int
    Reserva: float
    Stock: float
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool
    Action: ProcessActionEnum
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)


class MercaderiaItemCategoriaModel(BaseModel):
    MercaderiaId: int
    Codigo: str
    CategoriaId: int
    Nombre: str
    Descripcion: str
    UnidadMedidaId: int

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
