from DataLayer.TipoProductoDB import *
from EntityLayer.TipoProductoEntity import *


class TipoProducto:
    def Save(Ent: TipoProductoEntity):
        try:
            return TipoProductoDB.Save(Ent)
        except Exception as e:
            print(e)

    def GetMainItems():
        try:
            return TipoProductoDB.GetMainItems()
        except Exception as e:
            print(e)

    def Delete(Id: int):
        try:
            return TipoProductoDB.Delete(Id)
        except Exception as e:
            print(e)