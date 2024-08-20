from EntityLayer.GeneralEntity import TipoEntidadModel
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.RecepcionEntity import *
from Utilidades.Conexion.ErrorData import ErrorData



class TipoEntidadDB:
    def ObtenerItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_TipoEntidadObtenerItems", [])
            list = [TipoEntidadModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)