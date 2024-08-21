from EntityLayer.GeneralEntity import *
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore,CloseConnection
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class RecepListaDB:
    def ObtenerItems(Codigo: str):
        try:
            args = (Codigo,)
            resulset = DBProcedure().DBProcedureConsult("sp_RecepListaObtenerLista", args)
            print(args)
            list = [RecepListaModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)


    def ObtenerItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_RecepListaObtenerItem", args)
            list = [RecepListaModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

