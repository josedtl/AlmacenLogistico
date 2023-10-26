from DataLayer.EstadoCivilDB import *
from EntityLayer.EstadoCivilEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class EstadoCivil:
    def Save(Ent: EstadoCivilSaveModel):
        try:
            StartTransaction()
            data = EstadoCivilDB.Save(Ent)
            EndTransaction()
            return data
        except Exception as e:
            Restore()
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
    
