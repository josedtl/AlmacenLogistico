from DataLayer.ClientePersonaNaturalDB import *
from EntityLayer.ClientePersonaNaturalEntity import *


class ClientePersonaNatural:
    def Save(Ent: ClientePersonaNaturalSaveModel):
        try:
            return ClientePersonaNaturalDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return ClientePersonaNaturalDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return ClientePersonaNaturalDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return ClientePersonaNaturalDB.Delete(Id)
        except Exception as e:
            print(e)
    
