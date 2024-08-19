from DataLayer.OrdenCompraDetalleDB import *
from DataLayer.DepachoDetalleDB import *
from EntityLayer.OrdenCompraEntity import OrdenCompraMainModel, OrdenCompraSaveModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.DespachoEntity import *


class OrdenCompraDB:
    def ObtenerMain():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenCompraMain", [])
            list = [OrdenCompraMainModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

            
    def ObtenerItem(OrdenCompraId: int):
        try:
            args = (OrdenCompraId,)
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenCompraAllItem", args)
            list = [OrdenCompraSaveModel.Cargar(row) for row in resulset]
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
            args.append(Ent.TipoProcesoId)
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

            for detalle in Ent.DetalleItems:
                detalle.OrdenCompraId = Ent.OrdenCompraId
                if detalle.Action == ProcessActionEnum.Delete:
                    OrdenCompraDetalleDB.EliminarDB(detalle.OrdenCompraDetalleId)
                elif detalle.Action in [
                    ProcessActionEnum.Add,
                    ProcessActionEnum.Update,
                ]:
                    OrdenCompraDetalleDB.Save(detalle)

            return Ent
        except Exception as e:
            print(e)
            Restore()

