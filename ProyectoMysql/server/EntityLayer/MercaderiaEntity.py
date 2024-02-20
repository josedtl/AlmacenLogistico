from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class MercaderiaMainModel:
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

    def Cargar(_DB):
        c = MercaderiaMainModel()
        c.MercaderiaId = _DB["MercaderiaId"]
        c.Codigo = _DB["Codigo"]
        c.NomCategoria = _DB["NomCategoria"]
        c.NomTipoProducto = _DB["NomTipoProducto"]
        c.NomMarca = _DB["NomMarca"]
        c.NomModelo = _DB["NomModelo"]
        c.Descripcion = _DB["Descripcion"]
        c.NomUnidadMedida = _DB["NomUnidadMedida"]
        c.FechaRegistro = _DB["FechaRegistro"]
        c.CodUsuario = _DB["CodUsuario"]
        c.EstadoRegistro = bool(_DB["EstadoRegistro"]) 
        return c


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
