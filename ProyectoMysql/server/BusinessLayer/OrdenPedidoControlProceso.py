from DataLayer.OrdenPedidoControlProcesoDB import *
from EntityLayer.OrdenPedidoControlProcesoEntity import *


class OrdenPedidoControlProceso:
    def Save(Ent: OrdenPedidoControlProcesoSaveModel):
        try:
            return OrdenPedidoControlProcesoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return OrdenPedidoControlProcesoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return OrdenPedidoControlProcesoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return OrdenPedidoControlProcesoDB.Delete(Id)
        except Exception as e:
            print(e)
    
