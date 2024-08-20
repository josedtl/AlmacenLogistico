from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from .configMysql import get_connection
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.RecepcionEntity import *
from Utilidades.Conexion.ErrorData import ErrorData


class RecepcionDetalleDB:


    def ObtenerItem( Id : int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_RecepcionDetalleObtenerItem", args)
            list = [RecepcionDetalleSaveModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)