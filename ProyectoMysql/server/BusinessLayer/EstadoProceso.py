from DataLayer.EstadoProcesoDB import *


class EstadoProceso:

    def ObtenerItems():
        try:
            data =  EstadoProcesoDB.ObtenerItems()
            return data
        except Exception as e:
            print(e)    