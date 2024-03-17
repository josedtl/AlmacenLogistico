from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from Utilidades.Conexion.configMysql import get_connection, DBProcedure,Restore
from EntityLayer.OrdenPedidoDetalleEntity import *
import pymysql


class OrdenPedidoDetalleDB:
    def GetItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_OrdenPedidoDetalleAllItems")
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = OrdenPedidoDetalleItemModel.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,)
                cursor.callproc("sp_OrdenPedidoDetalleAllItem", args)
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = OrdenPedidoDetalleItemModel.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)

    def Save(Ent: OrdenPedidoDetalleSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_OrdenPedido_Update",
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
            print(Ent.OrdenPedidoDetalleId)
            return Ent
        except Exception as e:
            print("detalle")
            Restore()

    def Delete(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,)
                cursor.callproc("sp_OrdenPedidoDetalle_Delete", args)
                conn.commit()
            return ResponseAPI.Response(True)
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
            cursor.close()
            conn.close()

    def GetItemCabeceraOP(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,)
                cursor.callproc("sp_OrdenPedidoDetalleItemCabecera", args)
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = OrdenPedidoDetalleItemModel.CargarCabecera(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)
