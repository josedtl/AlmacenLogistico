from DataLayer.OrdenCompraPedidoEnlaceDB import *
from EntityLayer.OrdenCompraPedidoEnlaceEntity import *


class OrdenCompraPedidoEnlace:
    def Save(Ent: OrdenCompraPedidoEnlaceSaveModel):
        try:
            return OrdenCompraPedidoEnlaceDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return OrdenCompraPedidoEnlaceDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return OrdenCompraPedidoEnlaceDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return OrdenCompraPedidoEnlaceDB.Delete(Id)
        except Exception as e:
            print(e)
    
