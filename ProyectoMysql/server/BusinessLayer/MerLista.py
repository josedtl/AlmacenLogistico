from DataLayer.MerListaDB import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction


class MerLista:

    def GetItems(Codigo: str):
        try:
            data = MerListaDB.GetItems(Codigo)
            return data
        except Exception as e:
            print(e)

    def Save(Ent: MerListaSaveModel):
        try:
            StartTransaction()
            data = MerListaDB.Save(Ent)
            EndTransaction()
            return data
        except Exception as e:
            print(e)

    def GetItemTitulo(Codigo: str):
        try:
            data = MerListaDB.GetItemTitulo(Codigo)
            return data
        except Exception as e:
            print(e)

    def GetItemLike(Codigo: str, Nombre: str):
        try:
            data = MerListaDB.GetItemLike(Codigo, Nombre)
            return data
        except Exception as e:
            print(e)

    def GetItem(Id : int):
        try:
            data = MerListaDB.GetItem(Id)
            return data
        except Exception as e:
            print(e)