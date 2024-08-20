from EntityLayer.RecepListaEntity import RecepListaEntity
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore,CloseConnection
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class ReceptListaDB:
    def ObtenerItems(Codigo: str):
        try:
            args = (Codigo,)
            resulset = DBProcedure().DBProcedureConsult("sp_RecepListaObtenerLista", args)
            print(args)
            list = [RecepListaEntity.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)


    def ObtenerItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_RecepListaObtenerItem", args)
            list = [RecepListaEntity.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

