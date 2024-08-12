from DataLayer.OrdenPedidoDB import *
from EntityLayer.OrdenPedidoEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class OrdenPedido:
    def ObtenerMain():
        try:
            return OrdenPedidoDB.ObtenerMain()
        except Exception as e:
            print(e)
            
    def ObtenerItem(Id: int):
        try:
            return OrdenPedidoDB.ObtenerItem(Id)
        except Exception as e:
            print(e)
            
    def Registrar(Ent: OrdenPedidoSaveModel):
        try:
            StartTransaction()
            data = OrdenPedidoDB.RegistrarDB(Ent)
            EndTransaction()
            return data
        except Exception as e:
            Restore()
            print(e)

    def ObtenerFiltroOCO():
        try:
            return OrdenPedidoDB.ObtenerFiltroOCO()
        except Exception as e:
            print(e)
