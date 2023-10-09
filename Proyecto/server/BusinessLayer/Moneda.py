from DataLayer.MonedaDB import *
from EntityLayer.MonedaEntity import *


class Moneda:
    def Save(Ent: MonedaSaveModel):
        try:
            return MonedaDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return MonedaDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return MonedaDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return MonedaDB.Delete(Id)
        except Exception as e:
            print(e)
    
