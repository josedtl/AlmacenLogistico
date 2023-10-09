from DataLayer.ProveedorDB import *
from EntityLayer.ProveedorEntity import *


class Proveedor:
    def Save(Ent: ProveedorSaveModel):
        try:
            return ProveedorDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return ProveedorDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return ProveedorDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return ProveedorDB.Delete(Id)
        except Exception as e:
            print(e)
    
