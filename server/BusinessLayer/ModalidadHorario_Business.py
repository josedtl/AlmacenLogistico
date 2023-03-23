import json
from DataLayer.ModalidadHorario_Data import *


class ModalidadHorario_Business:
    def Get_ModalidadHorarioItems():
        try:
            data = ModalidadHorario_Data.Get_ModalidadHorarioItems()
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)
