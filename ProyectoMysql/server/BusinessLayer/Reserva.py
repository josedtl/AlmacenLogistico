from DataLayer.ReservaDB import ReservaDB
from EntityLayer.ReservaEntity import ReservaMercaderiaOPModel
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class Reserva:

    def GetMercaderiaMainItems():
        try:
            data =  ReservaDB.GetMercaderiaMainItems()
            return data
        except Exception as e:
            print(e)    

    def ReservarMercaderia(Ent: ReservaMercaderiaOPModel):
        try:
            StartTransaction()
            data = ReservaDB.ReservarMercaderia(Ent)
            EndTransaction()
            return data
        except Exception as e:
            Restore()
            print(e)

    def ReservaPedido(MercaderiaId : int):
        try:
            data =  ReservaDB.ReservaPedido(MercaderiaId)
            return data
        except Exception as e:
            print(e)    
    
    def ReservaResumen(MercaderiaId : int):
        try:
            data =  ReservaDB.ReservaResumen(MercaderiaId)
            return data
        except Exception as e:
            print(e)    

    def ObtenerReservaOPItem(OrdenPedidoId : int):
        try:
            data =  ReservaDB.ObtenerReservaOPItem(OrdenPedidoId)
            return data
        except Exception as e:
            print(e)    