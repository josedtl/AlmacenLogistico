from DataLayer.Producto_Data import *
from EntityLayer.Catalogo.ProductoEntity import *
import json

class Producto_Business:
    def Get_ProductoItems():
        try:
            data = Producto_Data.Get_ProductoItems()
            print(data)
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)


    def SaveProducto(Ent: ProductoSaveEntity):
        try:
            data = Producto_Data.SaveProducto(Ent)
            return data
        except Exception as e:
            print(e)