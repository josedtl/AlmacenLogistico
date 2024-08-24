from DataLayer.TarifaDB import *
from EntityLayer.TarifaEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore



class Tarifa:
    def ObtenerMain()-> list[TarifaMainModel] :
        try:
            return TarifaDB.ObtenerMain()
        except Exception as e:
            print(e)
    
    def Registrar(Ent: TarifaSaveModel) -> TarifaSaveModel:
        try:
            StartTransaction()
            Value = TarifaDB.RegistrarDB(Ent)
            EndTransaction()
            return Value
        except Exception as e:
            Restore()
            print(e)