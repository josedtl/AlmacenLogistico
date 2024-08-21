from EntityLayer.GeneralEntity import *
from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from .configMysql import get_connection
import pymysql
from Utilidades.Conexion.configMysql import DBProcedure, Restore

class ProcesoDB:

    def ObtenerTipo(Codigo :str):
        try:
            args = (Codigo,)
            resulset = DBProcedure().DBProcedureConsult("sp_ProcesoObtenerTipo", args)
            list = [ProcesoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
