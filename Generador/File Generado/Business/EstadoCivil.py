from DataLayer.EstadoCivilDB import *
from EntityLayer.EstadoCivilEntity import *


class EstadoCivil:
    def Save(Ent: EstadoCivilSaveModel):
        try:
            return EstadoCivilDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return EstadoCivilDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return EstadoCivilDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return EstadoCivilDB.Delete(Id)
        except Exception as e:
            print(e)
    
