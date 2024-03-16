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
    def GetItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenPedidoAllItems", [])
            list = [OrdenPedidoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenPedidoAllItem", args)
            list = [OrdenPedidoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

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


    def GetItemCabecera(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult(
                "sp_OrdenPedidoCabeceraItem", args
            )
            list = [OrdenPedidoItemModel.CargarCabecera(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItemOPMain():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenPedido_Main", [])
            list = [OrdenPedidoItemModel.CargarMain(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: OrdenPedidoSaveModel):
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
            args.append(Ent.ResponsableId)
            args.append(Ent.NumDocumentoResponsable)
            args.append(Ent.NomResponsable)
            args.append(Ent.FechaEmision)
            args.append(Ent.BloqueoEdicionOtros)
            args.append(Ent.FechaRegistro)
            args.append(Ent.CodUsuario)
            args.append(Ent.EstadoRegistro)
            Ent.OrdenPedidoId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_OrdenPedidoId"
            )
            print("ACA")

            for detalle in Ent.DetalleItems:
                detalle.OrdenPedidoId = Ent.OrdenPedidoId
                if detalle.Action == ProcessActionEnum.Delete:
                    OrdenPedidoDetalleDB.Delete(detalle.OrdenPedidoDetalleId)
                elif detalle.Action in [
                    ProcessActionEnum.Add,
                    ProcessActionEnum.Update,
                ]:
                    OrdenPedidoDetalleDB.Save(detalle)

            return Ent
        except Exception as e:
            print(e)
            Restore()
