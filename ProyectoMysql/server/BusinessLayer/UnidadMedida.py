from DataLayer.UbigeoDB import *
from EntityLayer.GeneralEntity import *

class UnidadMedida:
    def BuscarItem(Nombre : str):
        try:
            return UbigeoDB.BuscarItem(Nombre)
        except Exception as e:
            print(e)

    def ObtenerItems(UbigeoId : int):
        try:
            return UbigeoDB.ObtenerItem(UbigeoId)
        except Exception as e:
            print(e)
