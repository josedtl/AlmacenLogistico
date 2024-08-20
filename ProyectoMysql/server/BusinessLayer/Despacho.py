from DataLayer.DepachoDB import *
from EntityLayer.DespachoEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class Despacho:

    def DespachoObtenerMain():
        try:
            return DepachoDB.DespachoObtenerMain()
        except Exception as e:
            print(e)

    def ObtenerCabecera(Id: int):
        try:
            return DepachoDB.ObtenerCabecera(Id)
        except Exception as e:
            print(e)
            
    def Registrar(Ent: DespachoSaveModel):
        try:
            StartTransaction()
            data = DepachoDB.Registrar(Ent)
            EndTransaction()
            return data
        except Exception as e:
            Restore()
            print(e)
    


    
   