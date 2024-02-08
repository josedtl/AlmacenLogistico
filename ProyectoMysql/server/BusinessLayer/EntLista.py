from DataLayer.EntListaDB import *
from Utilidades.Conexion.configMysql import StartTransaction,EndTransaction


class EntLista:

    def GetItems(Codigo: str):
        try:
            StartTransaction()
            data = EntListaDB.GetItems(Codigo)
            EndTransaction()
            return data
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            StartTransaction()
            data = EntListaDB.GetItem(Id)
            EndTransaction()
            return data
        except Exception as e:
            print(e)
    
    def GetItemLike(Codigo: str, Nombre: str):
        try:
            StartTransaction()
            data = EntListaDB.GetItemLike(Codigo,Nombre)
            EndTransaction()
            return data
        except Exception as e:
            print(e)
