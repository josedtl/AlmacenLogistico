from DataLayer.ModeloDB import *
from EntityLayer.ModeloEntity import *


class Modelo:
    def Save(Ent: ModeloSaveModel):
        try:
            return ModeloDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return ModeloDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return ModeloDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return ModeloDB.Delete(Id)
        except Exception as e:
            print(e)
    
