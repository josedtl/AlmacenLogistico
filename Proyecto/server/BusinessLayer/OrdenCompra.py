from DataLayer.OrdenCompraDB import *
from EntityLayer.OrdenCompraEntity import *


class OrdenCompra:
    def Save(Ent: OrdenCompraSaveModel):
        try:
            return OrdenCompraDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return OrdenCompraDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return OrdenCompraDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return OrdenCompraDB.Delete(Id)
        except Exception as e:
            print(e)
    
