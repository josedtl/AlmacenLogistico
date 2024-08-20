from DataLayer.DepachoDetalleDB import *
from EntityLayer.DespachoEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class DespachoDetalle:
    def ObtenerDetalle(OrdenPedidoId: int):
        try:
            return DepachoDetalleDB.ObtenerDetalle(OrdenPedidoId)
        except Exception as e:
            print(e)
            
    
   