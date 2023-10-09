from DataLayer.ProveedorEmpresaDB import *
from EntityLayer.ProveedorEmpresaEntity import *


class ProveedorEmpresa:
    def Save(Ent: ProveedorEmpresaSaveModel):
        try:
            return ProveedorEmpresaDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return ProveedorEmpresaDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return ProveedorEmpresaDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return ProveedorEmpresaDB.Delete(Id)
        except Exception as e:
            print(e)
    
