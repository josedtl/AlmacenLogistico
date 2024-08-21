from EntityLayer.GeneralEntity import *
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore



class PorcentajeImpuestoDB:
    def ObtenerItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_PorcentajeImpuestoAllItems", [])
            list = [PorcentajeImpuestoModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def ObtenerItem(PorcentajeImpuestoId : int):
        try:
            args = (PorcentajeImpuestoId,)
            resulset = DBProcedure().DBProcedureConsult("sp_PorcentajeImpuestoAllItem",args)
            list = [PorcentajeImpuestoModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
    