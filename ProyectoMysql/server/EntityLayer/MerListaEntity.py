from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class MerListaSaveModel(BaseModel):
    ListaId: int
    CampoId: int
    Nombre: str
    Codigo: str
    Descripcion: str
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool
    Action: ProcessActionEnum
    CodigoTabla: str

class MerListaMainModel():
    ListaId: int
    CampoId: int
    Nombre: str
    Codigo: str
    Descripcion: str
    FechaRegistro: datetime
    CodUsuario: str
    EstadoRegistro: bool
    Action: ProcessActionEnum


    def Cargar(_DB):
        c =  MerListaMainModel()
        c.ListaId = _DB["ListaId"] 
        c.CampoId = _DB["CampoId"] 
        c.Codigo = _DB["Codigo"] 
        c.Nombre = _DB["Nombre"] 
        c.Descripcion = _DB["Descripcion"] 
        c.FechaRegistro = _DB["FechaRegistro"] 
        c.CodUsuario = _DB["CodUsuario"] 
        c.EstadoRegistro  = bool(ord(_DB["EstadoRegistro"])) 
        
        
        return c

class MerListaTituloModel():
    CampoId: int
    Nombre: str
    def CargarItem(_DB):
        c =  MerListaTituloModel()
        c.CampoId = _DB["CampoId"] 
        c.Nombre = _DB["Nombre"]    
        return c