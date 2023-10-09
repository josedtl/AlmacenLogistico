from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class ProcesoSaveModel(BaseModel):
    ProcesoId: int 
    ModuloSistemaId: int 
    TipoProcesoId: int 
    Nombre: str 
    Descripcion: int 
    EsPordefecto: bool 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 
    Action: ProcessActionEnum

class ProcesoItemModel:
    ProcesoId: int 
    ModuloSistemaId: int 
    TipoProcesoId: int 
    Nombre: str 
    Descripcion: int 
    EsPordefecto: bool 
    FechaRegistro: datetime 
    CodUsuario: str 
    EstadoRegistro: bool 

    def Cargar(_DB):
        c =  ProcesoItemModel()
        c.ProcesoId = _DB["ProcesoId"] 
        c.ModuloSistemaId = _DB["ModuloSistemaId"] 
        c.TipoProcesoId = _DB["TipoProcesoId"] 
        c.Nombre = _DB["Nombre"] 
        c.Descripcion = _DB["Descripcion"] 
        c.EsPordefecto = bool(ord(_DB["EsPordefecto"])) 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro = bool(ord(_DB["EstadoRegistro"])) 
        return c
