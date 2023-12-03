from DataLayer.SexoDB import *
from EntityLayer.SexoEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class Sexo:
    def Save(Ent: SexoSaveModel):
        try:
            StartTransaction()
            data = SexoDB.Save(Ent)
            EndTransaction()
            return data
        except Exception as e:
            Restore()
            print(e)
    
    def GetItems():
        try:
            return SexoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return SexoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return SexoDB.Delete(Id)
        except Exception as e:
            print(e)
    
