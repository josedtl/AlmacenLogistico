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



class MercaderiaItemModel:
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

    def Cargar(_DB):
        c = MercaderiaItemModel()
        c.MercaderiaId = _DB["MercaderiaId"]
        c.Codigo = _DB["Codigo"]
        c.CategoriaId = _DB["CategoriaId"]
        c.TipoProductoId = _DB["TipoProductoId"]
        c.MarcaId = _DB["MarcaId"]
        c.ModeloId = _DB["ModeloId"]
        c.Nombre = _DB["Nombre"]
        c.Descripcion = _DB["Descripcion"]
        c.UnidadMedidaId = _DB["UnidadMedidaId"]
        c.FechaRegistro = _DB["FechaRegistro"]
        c.CodUsuario = _DB["CodUsuario"]
        c.EstadoRegistro = bool(_DB["EstadoRegistro"]) 
        return c


class MercaderiaItemCategoriaModel:
    MercaderiaId: int
    Codigo: str
    CategoriaId: int
    Nombre: str
    Descripcion: str
    UnidadMedidaId: int

    def Cargar(_DB):
        c = MercaderiaItemCategoriaModel()
        c.MercaderiaId = _DB["MercaderiaId"]
        c.Codigo = _DB["Codigo"]
        c.CategoriaId = _DB["CategoriaId"]
        c.Nombre = _DB["Nombre"]
        c.Descripcion = _DB["Descripcion"]
        c.UnidadMedidaId = _DB["UnidadMedidaId"]
        return c

class MercaderiaItemOPModel:
    MercaderiaId: int
    Nombre: str
    CodigoUM: str
    Descripcion: str
    Stock: float

    def Cargar(_DB):
        c = MercaderiaItemOPModel()
        c.MercaderiaId = _DB["MercaderiaId"]
        c.Nombre = _DB["Nombre"]
        c.Descripcion = _DB["Descripcion"]
        c.CodigoUM = _DB["CodigoUM"]
        c.Stock = _DB["Stock"]
        return c
    
