from DataLayer.ReservaDetalleDB import *
from EntityLayer.ReservaEntity import ReservaMercaderiaOPModel
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class ReservaDetalle:
    def ReservaLista(Items: list[ReservaDetalleModel]):
        try:
            data =  ReservaDetalleDB.ReservaLista(Items)
            return data
        except Exception as e:
            print(e)    