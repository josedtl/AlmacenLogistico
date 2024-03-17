from DataLayer.OrdenCompraDB import *
from EntityLayer.OrdenCompraEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore

class OrdenCompra:
    def Registrar(Ent: OrdenCompraSaveModel):
        try:    
            StartTransaction()
            data= OrdenCompraDB.Registrar(Ent)
            EndTransaction()
            return data
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
    
    def GetItemMain():
        try:
            return OrdenCompraDB.GetItemMain()
        except Exception as e:
            print(e)