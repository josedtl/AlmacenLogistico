from DataLayer.UnidadMedidaDB import *
from EntityLayer.UnidadMedidaEntity import *


class UnidadMedida:
    def Save(Ent: UnidadMedidaSaveModel):
        try:
            return UnidadMedidaDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return UnidadMedidaDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return UnidadMedidaDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return UnidadMedidaDB.Delete(Id)
        except Exception as e:
            print(e)
    
