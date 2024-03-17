from DataLayer.OrdenCompraDetalleDB import OrdenCompraDetalleDB
from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from .configMysql import get_connection
from EntityLayer.OrdenCompraEntity import *
from Utilidades.Conexion.configMysql import DBProcedure, Restore
import pymysql


class OrdenCompraDB:
    def GetItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_OrdenCompraAllItems")
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = OrdenCompraItemModel.Cargar(row)
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
                cursor.callproc("sp_OrdenCompraAllItem", args)
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = OrdenCompraItemModel.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)


    def Registrar(Ent: OrdenCompraSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_OrdenCompra_Actualizar",
                ProcessActionEnum.Add: "sp_OrdenCompra_Registrar",
            }
            Store = store_mapping.get(Ent.Action, "sp_OrdenCompra_Registrar")
            args = []
            args.append(Ent.OrdenCompraId)
            args.append(Ent.ProcesoId)
            args.append(Ent.EstadoProcesoId)
            args.append(Ent.Codigo)
            args.append(Ent.EntidadId)
            args.append(Ent.NumDocumentoProveedor)
            args.append(Ent.NomProveedor)
            args.append(Ent.FechaEmision)
            args.append(Ent.FechaRegistro)
            args.append(Ent.CodUsuario)
            Ent.OrdenCompraId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_OrdenCompraId"
            )

            # for detalle in Ent.DetalleItems:
            #     detalle.OrdenCompraId = Ent.OrdenCompraId
            #     if detalle.Action == ProcessActionEnum.Delete:
            #         OrdenCompraDetalleDB.Delete(detalle.OrdenPedidoDetalleId)
            #     elif detalle.Action in [
            #         ProcessActionEnum.Add,
            #         ProcessActionEnum.Update,
            #     ]:
            #         OrdenCompraDetalleDB.Save(detalle)

            return Ent
        except Exception as e:
            print(e)
            Restore()



    def Delete(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,)
                cursor.callproc("sp_OrdenCompra_Delete", args)
                conn.commit()
            return ResponseAPI.Response(True)
        except Exception as e:
            error_code = e.args[0]
            error_entity = next((entity for entity in error_entities if entity['code'] == error_code), None)

            if error_entity:
                print(error_entity['message'])
                return ResponseAPIError.ErrorMensaje(error_entity['messageuser']) 
            else:
                error_message = "Ocurrio un error al eliminar el Registro"
                print(e)
                return ResponseAPIError.ErrorMensaje(error_message) 
        finally:
            cursor.close()
            conn.close()

    def GetItemMain():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenCompraMain", [])
            list = [OrdenCompraItemModel.CargarMain(row) for row in resulset]
            return list
        except Exception as e:
            print(e)