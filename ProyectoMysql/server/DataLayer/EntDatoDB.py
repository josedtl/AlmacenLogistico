from EntityLayer.EntDatoEntity import EntDatoItemLikeModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore, CloseConnection
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class EntDatoDB:

    def GetItemLike(Codigo: str, Nombre: str):
        try:
            args = (
                Codigo,
                Nombre,
            )
            resulset = DBProcedure().DBProcedureConsult("sp_EntDato_ItemLike", args)
            list = [EntDatoItemLikeModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetNomCompletoItemLike(Nombre: str):
        try:
            args = (Nombre,)
            resulset = DBProcedure().DBProcedureConsult(
                "sp_EntidadBuscarNomCompletoItem", args
            )
            list = [EntDatoItemLikeModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetNomCompletoItem(EntidadId: int):
        try:
            args = (EntidadId,)
            resulset = DBProcedure().DBProcedureConsult(
                "sp_EntDato_NomCompletoItem", args
            )
            list = [EntDatoItemLikeModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
