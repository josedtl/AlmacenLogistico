from DataLayer.PersonaNaturalDB import *
from EntityLayer.PersonaNaturalEntity import *


class PersonaNatural:
    def Save(Ent: PersonaNaturalSaveModel):
        try:
            return PersonaNaturalDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return PersonaNaturalDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return PersonaNaturalDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return PersonaNaturalDB.Delete(Id)
        except Exception as e:
            print(e)
    
