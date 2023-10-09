from DataLayer.ClienteDB import *
from EntityLayer.ClienteEntity import *


class Cliente:
    def Save(Ent: ClienteSaveModel):
        try:
            return ClienteDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return ClienteDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return ClienteDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return ClienteDB.Delete(Id)
        except Exception as e:
            print(e)
    
