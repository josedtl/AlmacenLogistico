from DataLayer.ModeloDB import *
from EntityLayer.ModeloEntity import *


class Modelo:
    def Save(Ent: ModeloEntity):
        try:
            return ModeloDB.Save(Ent)
        except Exception as e:
            print(e)

    def GetMainItems():
        try:
            return ModeloDB.GetMainItems()
        except Exception as e:
            print(e)

    def Delete(Id: int):
        try:
            return ModeloDB.Delete(Id)
        except Exception as e:
            print(e)