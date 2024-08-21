from DataLayer.MonedaDB import *
from EntityLayer.GeneralEntity import *


class Moneda:
    def ObtenerItems():
        try:
            return MonedaDB.ObtenerItems()
        except Exception as e:
            print(e)

    def ObtenerItem(Monedaid : int):
        try:
            return MonedaDB.ObtenerItem(Monedaid)
        except Exception as e:
            print(e)