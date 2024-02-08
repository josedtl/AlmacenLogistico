from DataLayer.EntListaDB import *


class EntLista:

    def GetItems(Codigo: str):
        try:
            return EntListaDB.GetItems(Codigo)
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return EntListaDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def GetItemLike(Codigo: str, Nombre: str):
        try:
            return EntListaDB.GetItemLike(Codigo,Nombre)
        except Exception as e:
            print(e)
