from DataLayer.DistritoDB import *
from EntityLayer.DistritoEntity import *


class Distrito:
    def Save(Ent: DistritoSaveModel):
        try:
            return DistritoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return DistritoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return DistritoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return DistritoDB.Delete(Id)
        except Exception as e:
            print(e)
    
