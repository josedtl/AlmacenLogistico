from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from .configMysql import get_connection, DatabaseManager, Init, Fin, Retornar
from EntityLayer.OrdenPedidoEntity import *
import pymysql
from DataLayer.OrdenPedidoDetalleDB import OrdenPedidoDetalleDB
from DataLayer.CorrelativoDB import CorrelativoDB


class OrdenPedidoDB:
    def GetItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_OrdenPedidoAllItems")
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = OrdenPedidoItemModel.Cargar(row)
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
                cursor.callproc("sp_OrdenPedidoAllItem", args)
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = OrdenPedidoItemModel.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)

    # db_manager = DatabaseManager()

    def Save(Ent: OrdenPedidoSaveModel):
        try:
            Store: str
            Store = "sp_OrdenPedido_Save"
            if Ent.Action == ProcessActionEnum.Update:
                Store = "sp_OrdenPedido_Update"

            Ent.Codigo = datetime.now().strftime("%Y%m%d%H%M%S")
            args = []
            args.append(Ent.OrdenPedidoId)
            args.append(Ent.ProcesoId)
            args.append(Ent.TipoProcesoId)
            args.append(Ent.EstadoProcesoId)
            args.append(Ent.Codigo)
            args.append(Ent.ResponsableId)
            args.append(Ent.NumDocumentoResponsable)
            args.append(Ent.NomResponsable)
            args.append(Ent.FechaEmision)
            args.append(Ent.BloqueoEdicionOtros)
            args.append(Ent.FechaRegistro)
            args.append(Ent.CodUsuario)
            args.append(Ent.EstadoRegistro)
            # Init()
            Ent.OrdenPedidoId = DatabaseManager().DBProcedure(
                Store, args, "v_OrdenPedidoId"
            )
            for detalle in Ent.DetalleItems:
                detalle.OrdenPedidoId = Ent.OrdenPedidoId
                if detalle.Action == ProcessActionEnum.Delete:
                    OrdenPedidoDetalleDB.Delete(detalle.OrdenPedidoDetalleId)
                if (
                    detalle.Action == ProcessActionEnum.Add
                    or detalle.Action == ProcessActionEnum.Update
                ):
                    OrdenPedidoDetalleDB.Save(detalle)
            print(Ent.OrdenPedidoId)
            # db_manager.conn.commit()

            # Fin()
            return Ent
        except Exception as e:
            print("d")
            Retornar()
            # db_manager.conn.rollback()
        # finally:
        #     cursor.close()
        #     conn.close()

    def Delete(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,)
                cursor.callproc("sp_OrdenPedido_Delete", args)
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

    def GetItemCabecera(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,)
                cursor.callproc("sp_OrdenPedidoCabeceraItem", args)
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = OrdenPedidoItemModel.CargarCabecera(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)
