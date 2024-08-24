from DataLayer.RecepcionDetalleDB import RecepcionDetalleDB
from EntityLayer.StockEntity import StockMercaderiaMainModel
from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.RecepcionEntity import *
import pymysql
from Utilidades.Conexion.ErrorData import ErrorData


class StockMercaderiaDB:
    def ObtenerMain():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_MercaderiaObtenerStockMain", [])
            list = [StockMercaderiaMainModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)