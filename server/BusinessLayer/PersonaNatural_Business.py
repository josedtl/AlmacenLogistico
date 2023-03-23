import json
from DataLayer.PersonaNatural_Data import *
from EntityLayer.PersonaNatural.PersonaNaturalModel import *

class PersonaNatural_Business:
    def Get_PersonaNaturalItems():
        try:
            data = PersonaNatural_Data.Get_PersonaNaturalItems()
            print(data)
            jsonData = []

            for row in data:
                jsonStr = json.dumps(row.__dict__)
                jsonStr = json.loads(jsonStr)
                
                jsonData.append(jsonStr)

            return jsonData
        except Exception as e:
            print(e)


    def Post_PersonaNatural_Insert(Ent: PersonaNaturalSave):
        try:
            data = PersonaNatural_Data.Post_PersonaNatural_Insert(Ent)
            return data
        except Exception as e:
            print(e)


    def Post_PersonaNatural_Delete(Id: int):
        try:
            data = PersonaNatural_Data.Post_PersonaNatural_Delete(Id)
            return data
        except Exception as e:
            print(e)

    def Update_PersonaNatural_Insert(Ent: PersonaNaturalSave):
        try:
            data = PersonaNatural_Data.Update_PersonaNatural_Insert(Ent)
            return data
        except Exception as e:
            print(e)
