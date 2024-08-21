from EntityLayer.GeneralEntity import UbigeoItemModel, UnidadMedidaItemModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore



class UnidadMedidaDB:
    def ObtenerItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_UnidadMedidaAllItems", [])
            print(resulset)
            list = [UnidadMedidaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def ObtenerItem(UnidadMedidaId : int):
        try:
            args = (UnidadMedidaId,)
            resulset = DBProcedure().DBProcedureConsult("sp_UnidadMedidaAllItem",args)
            list = [UbigeoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
    