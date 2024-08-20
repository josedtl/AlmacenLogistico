from DataLayer.ReceptListaDB import *
from Utilidades.Conexion.configMysql import StartTransaction,EndTransaction


class ReceptLista:

    def ObtenerItems(Codigo: str):
        try:
            data = ReceptListaDB.ObtenerItems(Codigo)
            return data
        except Exception as e:
            print(e)
    
    def ObtenerItem(Id: int):
        try:
            data = ReceptListaDB.ObtenerItem(Id)
            return data
        except Exception as e:
            print(e)