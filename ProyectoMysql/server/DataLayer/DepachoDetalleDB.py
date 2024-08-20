from DataLayer.ReservaDB import *
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.DespachoEntity import *


class DepachoDetalleDB:


    def ObtenerDetalle(OrdenPedidoId: int):
        try:
            args = (OrdenPedidoId,)
            resulset = DBProcedure().DBProcedureConsult("sp_Despacho_ObtenerDetalle", args)
            list = [DespachoDetalleSaveModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Registrar(Ent: DespachoDetalleSaveModel):
        try:

            Store =  "sp_DespachoDetalle_Save"
            args = []
            args.append(Ent.DespachoDetalleId)
            args.append(Ent.OrdenPedidoDetalleId)
            args.append(Ent.DespachoId)
            args.append(Ent.Cantidad)
            Ent.DespachoDetalleId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_DespachoDetalleId"
            )

            for detalle in Ent.DetalleReservaItem:
                ReservaDB.ReservarDespachoDB(detalle)


            return Ent
        except Exception as e:
            print(e)
            Restore()

