from DataLayer.OrdenPedidoDB import *
from EntityLayer.OrdenPedidoEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class OrdenPedido:
    def ObtenerMain()-> list[OrdenPedidoMainModel] :
        try:
            return OrdenPedidoDB.ObtenerMain()
        except Exception as e:
            print(e)
            
    def ObtenerItem(Id: int)-> list[OrdenPedidoSaveModel]:
        try:
            return OrdenPedidoDB.ObtenerItem(Id)
        except Exception as e:
            print(e)
            
    def Registrar(Ent: OrdenPedidoSaveModel) -> OrdenPedidoSaveModel:
        try:
            StartTransaction()
            Value = OrdenPedidoDB.RegistrarDB(Ent)
            EndTransaction()
            return Value
        except Exception as e:
            Restore()
            print(e)

    def ObtenerFiltroOCO()-> list[OrdenPedidoFiltroOCOModel]:
        try:
            return OrdenPedidoDB.ObtenerFiltroOCO()
        except Exception as e:
            print(e)
