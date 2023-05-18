from DataLayer.TipoRequerimiento_Data import *
from EntityLayer.Catalogo.TipoRequerimientoEntity import *
import json

class TipoRequerimiento_Business:
    def Get_TipoRequerimientoItems():
        try:
            data = TipoRequerimiento_Data.Get_TipoRequerimientoItems()
            print(data)
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)
