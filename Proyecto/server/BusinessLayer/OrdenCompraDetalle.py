from DataLayer.OrdenCompraDetalleDB import *
from EntityLayer.OrdenCompraDetalleEntity import *


class OrdenCompraDetalle:
    def Save(Ent: OrdenCompraDetalleSaveModel):
        try:
            return OrdenCompraDetalleDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return OrdenCompraDetalleDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return OrdenCompraDetalleDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return OrdenCompraDetalleDB.Delete(Id)
        except Exception as e:
            print(e)
    
