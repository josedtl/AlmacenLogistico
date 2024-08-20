from DataLayer.TipoEntidadDB import *
from EntityLayer.ReservaEntity import ReservaMercaderiaOPModel
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class TipoEntidad:

    def ObtenerItems():
        try:
            data =  TipoEntidadDB.ObtenerItems()
            return data
        except Exception as e:
            print(e)    