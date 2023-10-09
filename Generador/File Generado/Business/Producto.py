from DataLayer.ProductoDB import *
from EntityLayer.ProductoEntity import *


class Producto:
    def Save(Ent: ProductoSaveModel):
        try:
            return ProductoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return ProductoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return ProductoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return ProductoDB.Delete(Id)
        except Exception as e:
            print(e)
    
