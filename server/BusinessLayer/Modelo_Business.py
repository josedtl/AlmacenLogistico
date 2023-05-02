from DataLayer.Modelo_Data import *
from EntityLayer.Catalogo.ModeloEntity import *
import json

class Modelo_Business:
    def Get_ModeloItems():
        try:
            data = Modelo_Data.Get_ModeloItems()
            print(data)
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)


    def SaveModelo(Ent: ModeloSaveEntity):
        try:
            data = Modelo_Data.SaveModelo(Ent)
            return data
        except Exception as e:
            print(e)

    def DeleteModelo(Id: int):
        try:
            data = Modelo_Data.DeleteModelo(Id)
            return data
        except Exception as e:
            print(e)