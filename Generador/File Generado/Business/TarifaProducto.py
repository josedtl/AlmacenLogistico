from DataLayer.TarifaProductoDB import *
from EntityLayer.TarifaProductoEntity import *


class TarifaProducto:
    def Save(Ent: TarifaProductoSaveModel):
        try:
            return TarifaProductoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return TarifaProductoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return TarifaProductoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return TarifaProductoDB.Delete(Id)
        except Exception as e:
            print(e)
    
