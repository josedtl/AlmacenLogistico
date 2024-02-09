from DataLayer.EntListaDB import *
from Utilidades.Conexion.configMysql import StartTransaction,EndTransaction


class EntLista:

    def GetItems(Codigo: str):
        try:
            data = EntListaDB.GetItems(Codigo)
            return data
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            data = EntListaDB.GetItem(Id)
            return data
        except Exception as e:
            print(e)
    
    def GetItemLike(Codigo: str, Nombre: str):
        try:
            data = EntListaDB.GetItemLike(Codigo,Nombre)
            return data
        except Exception as e:
            print(e)
