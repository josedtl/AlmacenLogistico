from DataLayer.AreaDB import *
from EntityLayer.AreaEntity import *


class Area:
    def Save(Ent: AreaSaveModel):
        try:
            return AreaDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return AreaDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return AreaDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return AreaDB.Delete(Id)
        except Exception as e:
            print(e)
    
