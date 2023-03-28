from DataLayer.Marca_Data import *
from EntityLayer.Catalogo.MarcaEntity import *
import json

class Marca_Business:
    def Get_MarcaItems():
        try:
            data = Marca_Data.Get_MarcaItems()
            print(data)
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)