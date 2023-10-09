from DataLayer.EmpresaDB import *
from EntityLayer.EmpresaEntity import *


class Empresa:
    def Save(Ent: EmpresaSaveModel):
        try:
            return EmpresaDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return EmpresaDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return EmpresaDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return EmpresaDB.Delete(Id)
        except Exception as e:
            print(e)
    
