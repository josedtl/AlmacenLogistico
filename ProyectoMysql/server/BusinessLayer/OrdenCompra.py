from DataLayer.OrdenCompraDB import *
from EntityLayer.OrdenCompraEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore

class OrdenCompra:

    def ObtenerMain():
        try:
            return OrdenCompraDB.ObtenerMain()
        except Exception as e:
            print(e)

    def ObtenerItem(EmpresaId: int):
        try:
            return OrdenCompraDB.ObtenerItem(EmpresaId)
        except Exception as e:
            print(e)

    def Registrar(Ent: OrdenCompraSaveModel):
        try:    
            StartTransaction()
            data= OrdenCompraDB.Registrar(Ent)
            EndTransaction()
            return data.OrdenCompraId
        except Exception as e:
            print(e)
    