from datetime import datetime
from pydantic import BaseModel
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum

class ClientePersonaNaturalSaveModel(BaseModel):
    ClientePersonaNaturalId: int 
    ClienteId: int 
    PersonaNaturalId: int 
    Action: ProcessActionEnum

class ClientePersonaNaturalItemModel:
    ClientePersonaNaturalId: int 
    ClienteId: int 
    PersonaNaturalId: int 

    def Cargar(_DB):
        c =  ClientePersonaNaturalItemModel()
        c.ClientePersonaNaturalId = _DB["ClientePersonaNaturalId"] 
        c.ClienteId = _DB["ClienteId"] 
        c.PersonaNaturalId = _DB["PersonaNaturalId"] 
        return c
