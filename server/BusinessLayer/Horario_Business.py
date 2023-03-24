from DataLayer.Producto_Data import *
from EntityLayer.Catalogo.ProductoEntity import *

class Producto_Business:
    def Get_PersonaNaturalItems():
        try:
            data = Producto_Data.Get_PersonaNaturalItems()
            print(data)
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)