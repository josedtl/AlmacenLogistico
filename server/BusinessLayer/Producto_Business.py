from DataLayer.Producto_Data import *
from EntityLayer.Catalogo.ProductoEntity import *
import json


class Producto_Business:
    def Get_ProductoItems():
        try:
            data = Producto_Data.Get_ProductoItems()
            return data
        except Exception as e:
            print(e)

    def SaveProducto(Ent: ProductoSaveEntity):
        try:
            data = Producto_Data.SaveProducto(Ent)
            return data
        except Exception as e:
            print(e)

    def Get_ProductoMainItems():
        try:
            data = Producto_Data.Get_ProductoMainItems()
            print(data)
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)

                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)

    def Get_ProductoMainItem(ProductoId: int):
        try:
            data=Producto_Data.Get_ProductoMainItem(ProductoId)
            print(data)
            jsonData=[]

            for row in data:
                jsonStr=json.dumps(row.__dict__)
                jsonStr=json.loads(jsonStr)

                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)

    def Get_ProductoConcatenadolikeItem( v_Nombre:str):
        try:
            data = Producto_Data.Get_ProductoConcatenadoItemsLike(v_Nombre)
            print(data)
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)