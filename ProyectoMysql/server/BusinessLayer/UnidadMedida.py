from DataLayer.UnidadMedidaDB import *
from EntityLayer.GeneralEntity import *

class UnidadMedida:
    def ObtenerItems():
        try:
            return UnidadMedidaDB.ObtenerItems()
        except Exception as e:
            print(e)

    def ObtenerItem(Id : int):
        try:
            return UnidadMedidaDB.ObtenerItem(Id)
        except Exception as e:
            print(e)
