from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from .configMysql import get_connection
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.RecepcionEntity import *
import pymysql
from DataLayer.CorrelativoDB import CorrelativoDB
from Utilidades.Conexion.ErrorData import ErrorData


class RecepcionDB:

    def Registrar(Ent: RecepcionSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_OrdenPedido_Update",
                ProcessActionEnum.Add: "sp_RecepcionRegistrar",
            }
            Store = store_mapping.get(Ent.Action, "sp_RecepcionRegistrar")
            # Ent.Codigo = datetime.now().strftime("%Y%m%d%H%M%S")
            args = []
            args.append(Ent.RecepcionId)
            args.append(Ent.ProcesoId)
            args.append(Ent.EstadoProcesoId)
            args.append(Ent.Codigo)
            args.append(Ent.EntidadId)
            args.append(Ent.ObjetoId)
            args.append(Ent.TipoRecepcionId)
            args.append(Ent.TipoComprobanteId)
            args.append(Ent.SerieComprobante)
            args.append(Ent.CorrelativoComprobante)
            args.append(Ent.FechaRecepcion)
            args.append(Ent.FechaRegistro)
            args.append(Ent.CodUsuario)
            Ent.RecepcionId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_RecepcionId"
            )

            # for detalle in Ent.DetalleItems:
            #     detalle.OrdenPedidoId = Ent.OrdenPedidoId
            #     if detalle.Action == ProcessActionEnum.Delete:
            #         OrdenPedidoDetalleDB.Delete(detalle.OrdenPedidoDetalleId)
            #     elif detalle.Action in [
            #         ProcessActionEnum.Add,
            #         ProcessActionEnum.Update,
            #     ]:
            #         OrdenPedidoDetalleDB.Save(detalle)

            return Ent
        except Exception as e:
            print(e)
            Restore()

    def GetItemMain():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_Recepcion_Main", [])
            list = [RecepcionItemModel.CargarMain(row) for row in resulset]
            return list
        except Exception as e:
            print(e)