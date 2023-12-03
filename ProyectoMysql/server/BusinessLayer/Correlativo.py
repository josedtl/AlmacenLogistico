from DataLayer.CorrelativoDB import *
from EntityLayer.CorrelativoEntity import *


class Correlativo:
    def Save(Ent: CorrelativoSaveModel):
        try:
            return CorrelativoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return CorrelativoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return CorrelativoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return CorrelativoDB.Delete(Id)
        except Exception as e:
            print(e)
    
