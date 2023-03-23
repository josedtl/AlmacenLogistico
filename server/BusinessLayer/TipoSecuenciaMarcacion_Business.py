import json
from DataLayer.TipoSecuenciaMarcacion_Data import *


class TipoSecuenciaMarcacion_Business:
    def Get_TipoSecuenciaMarcacionItems():
        try:
            data = TipoSecuenciaMarcacion_Data.Get_TipoSecuenciaMarcacionItems()
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)

    def Get_TipoSecuenciaMarcacionItem(Id: int):
        try:
            data = TipoSecuenciaMarcacion_Data.Get_TipoSecuenciaMarcacionItem(Id)
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)
