from DataLayer.OrdenCompraDetalleDB import *


class OrdenCompraDetalle:

    def ObtenerItem(Id: int)-> list[OrdenCompraSaveModel]:
        try:
            return OrdenCompraDetalleDB.ObtenerItem(Id)
        except Exception as e:
            print(e)

