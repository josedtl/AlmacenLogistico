from DataLayer.MerListaDB import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction


class MerLista:

    def ObtenerMain(Codigo: str):
        try:
            data = MerListaDB.ObtenerMain(Codigo)
            return data
        except Exception as e:
            print(e)

    def Registrar(Ent: MerListaSaveModel):
        try:
            StartTransaction()
            data = MerListaDB.RegistrarDB(Ent)
            EndTransaction()
            return data
        except Exception as e:
            print(e)

    def ObtenerTitulo(Codigo: str):
        try:
            data = MerListaDB.ObtenerTitulo(Codigo)
            return data
        except Exception as e:
            print(e)

    def BuscarItem(Codigo: str, Nombre: str):
        try:
            data = MerListaDB.BuscarItem(Codigo, Nombre)
            return data
        except Exception as e:
            print(e)

    def ObtenerItem(Id : int):
        try:
            data = MerListaDB.ObtenerItem(Id)
            return data
        except Exception as e:
            print(e)