from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from .configMysql import get_connection
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.RecepcionEntity import *
from Utilidades.Conexion.ErrorData import ErrorData


class RecepcionDetalleDB:

    def Registrar(Ent: RecepcionDetalleSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_OrdenPedido_Update",
                ProcessActionEnum.Add: "sp_RecepcionDetalleRegistrar",
            }
            Store = store_mapping.get(Ent.Action, "sp_RecepcionDetalleRegistrar")
            # Ent.Codigo = datetime.now().strftime("%Y%m%d%H%M%S")
            args = []
            args.append(Ent.RecepcionDetalleId)
            args.append(Ent.RecepcionId)
            args.append(Ent.MercaderiaId)
            args.append(Ent.Cantidad)
            args.append(Ent.Lote)
            args.append(Ent.FechaIngreso)
            args.append(Ent.FechaRegistro)
            args.append(Ent.FechaVencimiento)
            args.append(Ent.Observacion)
            Ent.RecepcionId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_RecepcionDetalleId"
            )

            return Ent
        except Exception as e:
            print(e)
            Restore()
