from DataLayer.EmpresaDB import *
from EntityLayer.EmpresaEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class Empresa:
    def Save(Ent: EmpresaSaveModel):
        try:
            StartTransaction()
            data = EmpresaDB.Save(Ent)
            EndTransaction()
            return data
        except Exception as e:
            Restore()
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
    
    def GetMainItems():
        try:
            return EmpresaDB.GetMainItems()
        except Exception as e:
            print(e)

    def GetEmpresaBuscaDocumento(NumDocumento: str):
        try:
            return EmpresaDB.GetEmpresaBuscaDocumento(NumDocumento)
        except Exception as e:
            print(e)
