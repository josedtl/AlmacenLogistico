from DataLayer.ReceptListaDB import *
from Utilidades.Conexion.configMysql import StartTransaction,EndTransaction


class ReceptLista:

    def ObtenerLista(Codigo: str):
        try:
            data = ReceptListaDB.ObtenerLista(Codigo)
            return data
        except Exception as e:
            print(e)
    
    def ObtenerItem(Id: int):
        try:
            data = ReceptListaDB.ObtenerItem(Id)
            return data
        except Exception as e:
            print(e)