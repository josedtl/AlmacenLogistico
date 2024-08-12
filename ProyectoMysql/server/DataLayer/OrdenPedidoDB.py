from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from .configMysql import get_connection
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.OrdenPedidoEntity import *
import pymysql
from DataLayer.OrdenPedidoDetalleDB import OrdenPedidoDetalleDB
from DataLayer.CorrelativoDB import CorrelativoDB
from Utilidades.Conexion.ErrorData import ErrorData


class OrdenPedidoDB:
    def ObtenerMain():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenPedido_Main", [])
            list = [OrdenPedidoMainModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def ObtenerItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenPedidoCabeceraItem", args)
            list = [OrdenPedidoSaveModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def RegistrarDB(Ent: OrdenPedidoSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_OrdenPedido_Update",
                ProcessActionEnum.Add: "sp_OrdenPedido_SaveOP",
            }
            Store = store_mapping.get(Ent.Action, "sp_OrdenPedido_SaveOP")
            # Ent.Codigo = datetime.now().strftime("%Y%m%d%H%M%S")
            args = []
            args.append(Ent.OrdenPedidoId)
            args.append(Ent.ProcesoId)
            args.append(Ent.TipoProcesoId)
            args.append(Ent.EstadoProcesoId)
            args.append(Ent.Codigo)
            args.append(Ent.EntidadId)
            args.append(Ent.NumDocumentoResponsable)
            args.append(Ent.NomResponsable)
            args.append(Ent.FechaEmision)
            args.append(Ent.FechaRegistro)
            args.append(Ent.CodUsuario)
            Ent.OrdenPedidoId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_OrdenPedidoId"
            )

            for detalle in Ent.DetalleItems:
                detalle.OrdenPedidoId = Ent.OrdenPedidoId
                if detalle.Action == ProcessActionEnum.Delete:
                    OrdenPedidoDetalleDB.EliminarDB(detalle.OrdenPedidoDetalleId)
                elif detalle.Action in [
                    ProcessActionEnum.Add,
                    ProcessActionEnum.Update,
                ]:
                    OrdenPedidoDetalleDB.RegistrarDB(detalle)

            return Ent
        except Exception as e:
            print(e)
            Restore()


    def Delete(Id: int):
        try:
            # conn = get_connection()
            # with conn.cursor() as cursor:
            #     cursor = conn.cursor(pymysql.cursors.DictCursor)
            #     args = (Id,)
            #     cursor.callproc("sp_OrdenPedido_Delete", args)
            #     conn.commit()
            args = (Id,)
            Val = DBProcedure.DBProcedureDalete("sp_OrdenPedido_Delete", args)
            return ResponseAPI.Response(Val)
        except Exception as e:
            return ErrorData(e)




    def ObtenerFiltroOCO():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenPedidoObtenerFiltroOCO", [])
            list = [OrdenPedidoFiltroOCOModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

