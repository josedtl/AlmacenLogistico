import json
from DataLayer.Turno_Data import *


class Turno_Business:
    def Get_TurnoItems():
        try:
            data = Turno_Data.Get_TurnoItems()
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)
