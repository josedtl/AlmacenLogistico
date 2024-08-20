from DataLayer.EntListaDB import *
from Utilidades.Conexion.configMysql import StartTransaction,EndTransaction


class EntLista:
    def Registrar(Ent: EntListaItemModel):
        try:
            StartTransaction()
            data = EntListaDB.RegistrarDB(Ent)
            EndTransaction()
            return data
        except Exception as e:
            Restore()
            print(e)

    def BuscarItem(Codigo : str, Nombre :str):
        try:
            data =  EntListaDB.BuscarItem(Codigo, Nombre)
            return data
        except Exception as e:
            print(e)     

    def ObtenerItem(ListaId : int):
        try:
            data =  EntListaDB.ObtenerItem(ListaId)
            return data
        except Exception as e:
            print(e)    


    def ObtenerItems(Codigo : str):
        try:
            data =  EntListaDB.ObtenerItems(Codigo)
            return data
        except Exception as e:
            print(e)    