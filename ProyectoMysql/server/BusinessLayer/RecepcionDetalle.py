from DataLayer.RecepcionDetalleDB import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class RecepcionDetalle:

    def ObtenerItem(Id : int):
        try:
            return RecepcionDetalleDB.ObtenerItem(Id)
        except Exception as e:
            print(e)
