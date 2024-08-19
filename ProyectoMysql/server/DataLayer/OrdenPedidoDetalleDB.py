from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from Utilidades.Conexion.configMysql import get_connection, DBProcedure,Restore
from EntityLayer.OrdenPedidoEntity import *


class OrdenPedidoDetalleDB:
    def ObtenerItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenPedidoDetalleItemCabecera", args)
            list = [OrdenPedidoDetalleSaveModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)


    def RegistrarDB(Ent: OrdenPedidoDetalleSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_OrdenPedidoDetalle_Update",
                ProcessActionEnum.Add: "sp_OrdenPedidoDetalle_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_OrdenPedidoDetalle_Save")
            args = []
            args.append(Ent.OrdenPedidoDetalleId)
            args.append(Ent.OrdenPedidoId)
            args.append(Ent.MercaderiaId)
            args.append(Ent.UnidadMedidaId)
            args.append(Ent.CantidadSolicitado)
            args.append(Ent.CantidadReservado)
            args.append(Ent.CantidadFaltante)
            args.append(Ent.CantidadAtendido)
            args.append(Ent.Enlazado)
            args.append(Ent.Atendido)
            Ent.OrdenPedidoDetalleId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_OrdenPedidoDetalleId"
            )
            return Ent
        except Exception as e:
            print("detalle")
            Restore()



    def EliminarDB(Id: int):
        try:
            args = (Id,)
            Val = DBProcedure.DBProcedureDalete("sp_OrdenPedido_Delete", args)
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

    def ObtenerFiltroOCD():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenPedidoDetalleObtenerFiltroOCD", [])
            list = [OrdenPedidoFiltroOCDModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)