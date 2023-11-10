from DataLayer.ClienteDB import *
from EntityLayer.ClienteEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore

class Cliente:
    def Save(Ent: ClienteSaveModel):
        try:
            StartTransaction()
            data = ClienteDB.Save(Ent)
            EndTransaction()
            return data
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return ClienteDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return ClienteDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return ClienteDB.Delete(Id)
        except Exception as e:
            print(e)
    
    def SaveCompleto(Ent: ClienteSaveCompletoModel):
        try:
            StartTransaction()
            data = ClienteDB.SaveCompleto(Ent)
            EndTransaction()
            return data
        except Exception as e:
            print(e)

