from DataLayer.StockMercaderiaDB import *
from EntityLayer.ReservaEntity import ReservaMercaderiaOPModel
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class StockMercaderia:

    def ObtenerMain():
        try:
            data =  StockMercaderiaDB.ObtenerMain()
            return data
        except Exception as e:
            print(e)    