from DataLayer.Producto_Data import *
from EntityLayer.Catalogo.ProductoEntity import *

class Producto_Business:
    def SaveHorario(Ent: ProductoEntity):
        try:
            data = Producto_Data.SaveHorario(Ent)
            return data
        except Exception as e:
            print(e)
