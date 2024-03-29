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
    
    def GetMainItems():
        try:
            data =  PersonaNaturalDB.GetMainItems()
            return data
        except Exception as e:
            print(e)    
    def GetCabeceraItem(Id: int):
        try:
            return PersonaNaturalDB.GetCabeceraItem(Id)
        except Exception as e:
            print(e)

    def GetBuscardocumento(NumDocumento: str):
        try:
            return PersonaNaturalDB.GetBuscardocumento(NumDocumento)
        except Exception as e:
            print(e)