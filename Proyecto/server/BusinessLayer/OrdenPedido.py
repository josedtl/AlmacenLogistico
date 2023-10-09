from DataLayer.OrdenPedidoDB import *
from EntityLayer.OrdenPedidoEntity import *


class OrdenPedido:
    def Save(Ent: OrdenPedidoSaveModel):
        try:
            return OrdenPedidoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return OrdenPedidoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return OrdenPedidoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return OrdenPedidoDB.Delete(Id)
        except Exception as e:
            print(e)
    
