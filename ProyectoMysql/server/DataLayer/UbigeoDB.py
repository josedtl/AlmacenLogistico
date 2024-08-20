from EntityLayer.GeneralEntity import UbigeoItemModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore


class UbigeoDB:
    def BuscarItem(Nombre : str):
        try:
            args = (Nombre, )
            resulset = DBProcedure().DBProcedureConsult("sp_UbigeoItemLike",args)
            list = [UbigeoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
            
    def ObtenerItem(Id : int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_UbigeoAllItem",args)
            list = [UbigeoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
    