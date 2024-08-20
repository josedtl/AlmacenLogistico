from DataLayer.OrdenPedidoDetalleDB import *


class OrdenPedidoDetalle:

    def ObtenerItem(Id: int):
        try:
            return OrdenPedidoDetalleDB.ObtenerItem(Id)
        except Exception as e:
            print(e)

    def ObtenerFiltroOCD():
        try:
            return OrdenPedidoDetalleDB.ObtenerFiltroOCD()
        except Exception as e:
            print(e)

