from DataLayer.TipoProductoDB import *
from EntityLayer.TipoProductoEntity import *


class TipoProducto:
    def Save(Ent: TipoProductoSaveModel):
        try:
            return TipoProductoDB.Save(Ent)
        except Exception as e:
            print(e)

    def GetItems():
        try:
            return TipoProductoDB.GetItems()
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            return TipoProductoDB.GetItem(Id)
        except Exception as e:
            print(e)

    def Delete(Id: int):
        try:
            return TipoProductoDB.Delete(Id)
        except Exception as e:
            print(e)

    def GetItemLike(Nombre: str):
        try:
            return TipoProductoDB.GetItemLike(Nombre)
        except Exception as e:
            print(e)
