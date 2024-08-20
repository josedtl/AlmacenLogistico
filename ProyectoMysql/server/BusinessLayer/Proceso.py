from DataLayer.ProcesoDB import *


class Proceso:

    def ObtenerTipo(Codigo: str):
        try:
            return ProcesoDB.ObtenerTipo(Codigo)
        except Exception as e:
            print(e)