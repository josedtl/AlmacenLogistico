from DataLayer.TipoProducto_Data import *
from EntityLayer.Catalogo.TipoProductoEntity import *
import json

class TipoProducto_Business:
    def Get_TipoProductoItems():
        try:
            data = TipoProducto_Data.Get_TipoProductoItems()
            print(data)
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)


    def Get_TipoProductoItemsLike( v_Nombre:str):
        try:
            data = TipoProducto_Data.Get_TipoProductoItemsLike(v_Nombre)
            print(data)
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)

    def SaveTipoProducto(Ent: TipoProductoSaveEntity):
        try:
            data = TipoProducto_Data.SaveTipoProducto(Ent)
            return data
        except Exception as e:
            print(e)

    def DeleteTipoProducto(Id: int):
        try:
            data = TipoProducto_Data.DeleteTipoProducto(Id)
            return data
        except Exception as e:
            print(e)