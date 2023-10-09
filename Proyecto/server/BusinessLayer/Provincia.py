from DataLayer.ProvinciaDB import *
from EntityLayer.ProvinciaEntity import *


class Provincia:
    def Save(Ent: ProvinciaSaveModel):
        try:
            return ProvinciaDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return ProvinciaDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return ProvinciaDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return ProvinciaDB.Delete(Id)
        except Exception as e:
            print(e)
    
