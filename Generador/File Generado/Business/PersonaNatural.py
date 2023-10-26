from DataLayer.PersonaNaturalDB import *
from EntityLayer.PersonaNaturalEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class PersonaNatural:
    def Save(Ent: PersonaNaturalSaveModel):
        try:
            StartTransaction()
            data = PersonaNaturalDB.Save(Ent)
            EndTransaction()
            return data
        except Exception as e:
            Restore()
            print(e)
    
    def GetItems():
        try:
            return PersonaNaturalDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return PersonaNaturalDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return PersonaNaturalDB.Delete(Id)
        except Exception as e:
            print(e)
    
