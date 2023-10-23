from DataLayer.OrdenPedidoDB import *
from EntityLayer.OrdenPedidoEntity import *
from DataLayer.configMysql import Init, Fin, Retornar


class OrdenPedido:
    def Save(Ent: OrdenPedidoSaveModel):
        try:
            Init()
            data = OrdenPedidoDB.Save(Ent)
            Fin()
            return data
        except Exception as e:
            print(e)
            Retornar()

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
