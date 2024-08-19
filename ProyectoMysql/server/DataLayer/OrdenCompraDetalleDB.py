
from DataLayer.DepachoDetalleDB import *
from EntityLayer.OrdenCompraEntity import OrdenCompraDetalleSaveModel, OrdenCompraMainModel, OrdenCompraSaveModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI,ResponseAPIError
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.DespachoEntity import *
from Utilidades.Arreglos.ListError import error_entities


class OrdenCompraDetalleDB:
    def ObtenerItem(OrdenCompraId: int):
        try:
            args = (OrdenCompraId,)
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenCompraDetalleCabeceraItem", args)
            list = [OrdenCompraSaveModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)


    def Save(Ent: OrdenCompraDetalleSaveModel):
        try:
            print("Entro al detalle")
            store_mapping = {
                ProcessActionEnum.Update: "sp_OrdenCompraDetalle_Update",
                ProcessActionEnum.Add: "sp_OrdenCompraDetalle_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_OrdenCompraDetalle_Save")
            args = []
            args.append(Ent.OrdenCompraDetalleId)
            args.append(Ent.OrdenCompraId)
            args.append(Ent.MercaderiaId)
            args.append(Ent.UnidadMedidaId)
            args.append(Ent.CantidadSolicitado)
            args.append(Ent.CantidadComprado)
            args.append(Ent.CantidadFaltante)
            args.append(Ent.PrecioUnitario)
            Ent.OrdenCompraDetalleId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_OrdenCompraDetalleId"
            )
            return Ent
        except Exception as e:
            print(e)
            Restore()

    def EliminarDB(Id: int):
        try:
            args = (Id,)
            Val = DBProcedure.DBProcedureDalete("sp_OrdenCompraDetalle_Delete", args)
            return ResponseAPI.Response(Val)
        except Exception as e:
            error_code = e.args[0]
            error_entity = next(
                (entity for entity in error_entities if entity["code"] == error_code),
                None,
            )

            if error_entity:
                print(error_entity["message"])
                return ResponseAPIError.ErrorMensaje(error_entity["messageuser"])
            else:
                error_message = "Ocurrio un error al eliminar el Registro"
                print(e)
                return ResponseAPIError.ErrorMensaje(error_message)
        finally:
            Restore()