from DataLayer.PorcentajeImpuestoDB import *
from EntityLayer.GeneralEntity import *

class PorcentajeImpuesto:
    def ObtenerItems():
        try:
            return PorcentajeImpuestoDB.ObtenerItems()
        except Exception as e:
            print(e)

    def ObtenerItem(Id : int):
        try:
            return PorcentajeImpuestoDB.ObtenerItem(Id)
        except Exception as e:
            print(e)
