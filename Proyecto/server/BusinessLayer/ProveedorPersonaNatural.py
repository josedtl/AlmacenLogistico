from DataLayer.ProveedorPersonaNaturalDB import *
from EntityLayer.ProveedorPersonaNaturalEntity import *


class ProveedorPersonaNatural:
    def Save(Ent: ProveedorPersonaNaturalSaveModel):
        try:
            return ProveedorPersonaNaturalDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return ProveedorPersonaNaturalDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return ProveedorPersonaNaturalDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return ProveedorPersonaNaturalDB.Delete(Id)
        except Exception as e:
            print(e)
    
