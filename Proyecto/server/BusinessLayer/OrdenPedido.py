from DataLayer.OrdenPedidoDB import *
from EntityLayer.OrdenPedidoEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class OrdenPedido:
    def Save(Ent: OrdenPedidoSaveModel):
        try:
            StartTransaction()
            data = OrdenPedidoDB.Save(Ent)
            EndTransaction()
            return data
        except Exception as e:
            Restore()
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

    def GetItemCabecera(Id: int):
        try:
            return OrdenPedidoDB.GetItemCabecera(Id)
        except Exception as e:
            print(e)

    def GetItemOPMain():
        try:
            return OrdenPedidoDB.GetItemOPMain()
        except Exception as e:
            print(e)
