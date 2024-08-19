from DataLayer.DepachoDetalleDB import *
from EntityLayer.GeneralEntity import EstadoProcesoModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.DespachoEntity import *


class EstadoProcesoDB:
    def ObtenerItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_EstadoProcesoObtenerItems", [])
            list = [EstadoProcesoModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

