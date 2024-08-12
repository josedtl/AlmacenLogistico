from DataLayer.OrdenPedidoDetalleDB import *
from EntityLayer.OrdenPedidoDetalleEntity import *


class OrdenPedidoDetalle:

    def ObtenerItem(Id: int):
        try:
            return OrdenPedidoDetalleDB.ObtenerItem(Id)
        except Exception as e:
            print(e)

    def ObtenerFiltroOCD():
        try:
            return OrdenPedidoDetalleDB.ObtenerItem()
        except Exception as e:
            print(e)

