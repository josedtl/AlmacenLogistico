from DataLayer.EntDatoDB import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction


class EntDato:

    def GetItemLike(Codigo: str, Nombre: str):
        try:
            data = EntDatoDB.GetItemLike(Codigo, Nombre)
            return data
        except Exception as e:
            print(e)

    def GetNomCompletoItemLike(Nombre: str):
        try:
            data = EntDatoDB.GetNomCompletoItemLike(Nombre)
            return data
        except Exception as e:
            print(e)

    def GetNomCompletoItem(EntidadId: int):
        try:
            data = EntDatoDB.GetNomCompletoItem(EntidadId)
            return data
        except Exception as e:
            print(e)
