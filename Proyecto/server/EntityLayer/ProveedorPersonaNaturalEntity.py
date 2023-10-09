from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class ProveedorPersonaNaturalSaveModel(BaseModel):
    ProveedorPersonaNaturalId: int 
    ProveedorId: int 
    PersonaNaturalId: int 
    Action: ProcessActionEnum

class ProveedorPersonaNaturalItemModel:
    ProveedorPersonaNaturalId: int 
    ProveedorId: int 
    PersonaNaturalId: int 

    def Cargar(_DB):
        c =  ProveedorPersonaNaturalItemModel()
        c.ProveedorPersonaNaturalId = _DB["ProveedorPersonaNaturalId"] 
        c.ProveedorId = _DB["ProveedorId"] 
        c.PersonaNaturalId = _DB["PersonaNaturalId"] 
        return c
