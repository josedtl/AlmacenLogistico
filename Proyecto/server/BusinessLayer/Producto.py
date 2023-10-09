from DataLayer.ProductoDB import *
from EntityLayer.ProductoEntity import *
import json


class Producto:
    def Save(Ent: ProductoEntity):
        try:
            return ProductoDB.Save(Ent)
        except Exception as e:
            print(e)

    def GetMainItems():
        try:
            return ProductoDB.GetMainItems()
        except Exception as e:
            print(e)

    def Delete(Id: int):
        try:
            return ProductoDB.Delete(Id)
        except Exception as e:
            print(e)