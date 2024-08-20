from DataLayer.EstadoProcesoDB import *


class EstadoProceso:

    def ObtenerItem():
        try:
            data =  EstadoProcesoDB.ObtenerItems()
            return data
        except Exception as e:
            print(e)    