from DataLayer.RecepcionDB import *
from EntityLayer.RecepcionEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class Recepcion:

    def ObtenerMain():
        try:
            return RecepcionDB.ObtenerMain()
        except Exception as e:
            print(e)


    def ObtenerItem(Id : int):
        try:
            return RecepcionDB.ObtenerItem(Id)
        except Exception as e:
            print(e)

    def Registrar(Ent: RecepcionSaveModel) -> RecepcionSaveModel:
        try:
            StartTransaction()
            data = RecepcionDB.Registrar(Ent)
            EndTransaction()
            return data
        except Exception as e:
            Restore()
            print(e)
            
