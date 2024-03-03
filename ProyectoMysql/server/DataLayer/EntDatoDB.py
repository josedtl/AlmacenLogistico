from EntityLayer.EntDatoEntity import EntDatoItemLikeModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore,CloseConnection
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class EntDatoDB:
    # def GetItems(Codigo: any):
    #     try:
    #         args = (Codigo,)
    #         resulset = DBProcedure().DBProcedureConsult("sp_ListaEntidad_Items", args)
    #         print(args)
    #         list = [EntListaEntity.Cargar(row) for row in resulset]
    #         return list
    #     except Exception as e:
    #         print(e)


    # def GetItem(Id: int):
    #     try:
    #         args = (Id,)
    #         resulset = DBProcedure().DBProcedureConsult("sp_ListaEntidad_Item", args)
    #         list = [EntListaEntity.Cargar(row) for row in resulset]
    #         return list
    #     except Exception as e:
    #         print(e)


    def GetItemLike(Codigo: str, Nombre: str):
        try:
            args = (
                Codigo,
                Nombre,
            )
            resulset = DBProcedure().DBProcedureConsult(
                "sp_EntDato_ItemLike", args
            )
            list = [EntDatoItemLikeModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetNomCompletoItemLike( Nombre: str):
        try:
            args = (
                Nombre,
            )
            resulset = DBProcedure().DBProcedureConsult(
                "sp_EntDato_NomCompletoItemLike", args
            )
            list = [EntDatoItemLikeModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

