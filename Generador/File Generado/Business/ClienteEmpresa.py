from DataLayer.ClienteEmpresaDB import *
from EntityLayer.ClienteEmpresaEntity import *


class ClienteEmpresa:
    def Save(Ent: ClienteEmpresaSaveModel):
        try:
            return ClienteEmpresaDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return ClienteEmpresaDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return ClienteEmpresaDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return ClienteEmpresaDB.Delete(Id)
        except Exception as e:
            print(e)
    
