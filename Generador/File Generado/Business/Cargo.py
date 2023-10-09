from DataLayer.CargoDB import *
from EntityLayer.CargoEntity import *


class Cargo:
    def Save(Ent: CargoSaveModel):
        try:
            return CargoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return CargoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return CargoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return CargoDB.Delete(Id)
        except Exception as e:
            print(e)
    
