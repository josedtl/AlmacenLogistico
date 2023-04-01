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


    def SaveMarca(Ent: MarcaSaveEntity):
        try:
            data = Marca_Data.SaveMarca(Ent)
            return data
        except Exception as e:
            print(e)

    def DeleteMarca(Id: int):
        try:
            data = Marca_Data.DeleteMarca(Id)
            return data
        except Exception as e:
            print(e)