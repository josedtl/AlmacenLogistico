from DataLayer.OrdenPedidoDetalleDB import *
from EntityLayer.OrdenPedidoDetalleEntity import *


class OrdenPedidoDetalle:
    def Save(Ent: OrdenPedidoDetalleSaveModel):
        try:
            return OrdenPedidoDetalleDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return OrdenPedidoDetalleDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return OrdenPedidoDetalleDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return OrdenPedidoDetalleDB.Delete(Id)
        except Exception as e:
            print(e)
    
