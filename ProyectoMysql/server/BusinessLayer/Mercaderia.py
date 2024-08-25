from DataLayer.MercaderiaDB import MercaderiaDB
from EntityLayer.MercaderiaEntity import MercaderiaSaveModel
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class Mercaderia:

    def ObtenerMain():
        try:
            data =  MercaderiaDB.ObtenerMain()
            return data
        except Exception as e:
            print(e)    

    def Registrar(Ent: MercaderiaSaveModel):
        try:
            StartTransaction()
            data = MercaderiaDB.RegistrarDB(Ent)
            EndTransaction()
            return data
        except Exception as e:
            Restore()
            print(e)

    def ObtenerItem(MercaderiaId : int):
        try:
            data =  MercaderiaDB.ObtenerItem(MercaderiaId)
            return data
        except Exception as e:
            print(e)    

    def BuscarCategoriaItem(Nombre : str, CategoriaId :int):
        try:
            data =  MercaderiaDB.BuscarCategoriaItem(Nombre, CategoriaId)
            return data
        except Exception as e:
            print(e)    

    def ObtenerItemOP(Id : int):
        try:
            data =  MercaderiaDB.ObtenerItemOP(Id)
            return data
        except Exception as e:
            print(e)    