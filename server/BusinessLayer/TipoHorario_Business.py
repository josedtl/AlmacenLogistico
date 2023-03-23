import json
from DataLayer.TipoHorario_Data import *


class TipoHorario_Business:
    def Get_TipoHorarioItems():
        try:
            data = TipoHorario_Data.Get_TipoHorarioItems()
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)
