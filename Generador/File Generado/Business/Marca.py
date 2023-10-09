from DataLayer.MarcaDB import *
from EntityLayer.MarcaEntity import *


class Marca:
    def Save(Ent: MarcaSaveModel):
        try:
            return MarcaDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return MarcaDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return MarcaDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return MarcaDB.Delete(Id)
        except Exception as e:
            print(e)
    
