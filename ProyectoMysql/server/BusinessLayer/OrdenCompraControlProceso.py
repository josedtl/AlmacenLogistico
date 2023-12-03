from DataLayer.OrdenCompraControlProcesoDB import *
from EntityLayer.OrdenCompraControlProcesoEntity import *


class OrdenCompraControlProceso:
    def Save(Ent: OrdenCompraControlProcesoSaveModel):
        try:
            return OrdenCompraControlProcesoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return OrdenCompraControlProcesoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return OrdenCompraControlProcesoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return OrdenCompraControlProcesoDB.Delete(Id)
        except Exception as e:
            print(e)
    
