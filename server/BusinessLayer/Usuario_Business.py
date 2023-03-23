import json
from DataLayer.Usuario_Data import *


class Usuario_Business:
    def Get_Acceso(v_COD_ID: str, v_PWD: str):
        try:
            data = Usuario_Data.Get_Acceso(v_COD_ID, v_PWD)
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)
