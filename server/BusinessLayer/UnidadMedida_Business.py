from DataLayer.UnidadMedida_Data import *
from EntityLayer.Catalogo.UnidadMedidaEntity import *
import json

class UnidadMedida_Business:
    def Get_UnidadMedidaItems():
        try:
            data = UnidadMedida_Data.Get_UnidadMedidaItems()
            print(data)
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)
