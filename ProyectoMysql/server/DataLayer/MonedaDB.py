from EntityLayer.GeneralEntity import MonedaModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore



class MonedaDB:
    def ObtenerItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_MonedaAllItems", [])
            list = [MonedaModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def ObtenerItem(MonedaId : int):
        try:
            args = (MonedaId,)
            resulset = DBProcedure().DBProcedureConsult("sp_MonedaAllItem",args)
            list = [MonedaModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
    