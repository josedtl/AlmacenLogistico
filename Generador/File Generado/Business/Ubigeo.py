from DataLayer.UbigeoDB import *
from EntityLayer.UbigeoEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class Ubigeo:
    def Save(Ent: UbigeoSaveModel):
        try:
            StartTransaction()
            data = UbigeoDB.Save(Ent)
            EndTransaction()
            return data
        except Exception as e:
            Restore()
            print(e)
    
    def GetItems():
        try:
            return UbigeoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return UbigeoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return UbigeoDB.Delete(Id)
        except Exception as e:
            print(e)
    
