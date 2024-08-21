from DataLayer.RecepListaDB import *
from Utilidades.Conexion.configMysql import StartTransaction,EndTransaction


class RecepLista:

    def ObtenerItems(Codigo: str):
        try:
            data = RecepListaDB.ObtenerItems(Codigo)
            return data
        except Exception as e:
            print(e)
    
    def ObtenerItem(Id: int):
        try:
            data = RecepListaDB.ObtenerItem(Id)
            return data
        except Exception as e:
            print(e)