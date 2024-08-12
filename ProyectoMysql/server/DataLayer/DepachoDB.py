from DataLayer.DepachoDetalleDB import *
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.DespachoEntity import *


class DepachoDB:
    def DespachoObtenerMain():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_Reserva_Main", [])
            list = [DespachoMainModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def ObtenerCabecera(OrdenPedidoId: int):
        try:
            args = (OrdenPedidoId,)
            resulset = DBProcedure().DBProcedureConsult("sp_Despacho_ObtenerCabecera", args)
            list = [DespachoSaveModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Registrar(Ent: DespachoSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_Despacho_Update",
                ProcessActionEnum.Add: "sp_Despacho_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_Despacho_Save")
            args = []
            args.append(Ent.DespachoId)
            args.append(Ent.OrdenPedidoId)
            args.append(Ent.EntidadEntregadoId)
            args.append(Ent.Codigo)
            args.append(Ent.FechaHoraEntrega)
            args.append(Ent.FechaRegistro)
            Ent.DespachoId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_DespachoId"
            )
            
            for detalle in Ent.DetalleItems:
                detalle.DespachoId = Ent.DespachoId
                DepachoDetalleDB.Registrar(detalle)

            return Ent
        except Exception as e:
            print(e)
            Restore()

