from DataLayer.ModuloSistemaDB import *
from EntityLayer.ModuloSistemaEntity import *


class ModuloSistema:
    def Save(Ent: ModuloSistemaSaveModel):
        try:
            return ModuloSistemaDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return ModuloSistemaDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return ModuloSistemaDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return ModuloSistemaDB.Delete(Id)
        except Exception as e:
            print(e)
    
