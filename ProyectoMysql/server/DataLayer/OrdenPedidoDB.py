from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.OrdenPedidoEntity import *
from DataLayer.OrdenPedidoDetalleDB import OrdenPedidoDetalleDB


class OrdenPedidoDB:
    def ObtenerMain()-> list[OrdenPedidoMainModel] :
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenPedido_Main", [])
            list = [OrdenPedidoMainModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def ObtenerItem(Id: int) -> list[OrdenPedidoSaveModel]:
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenPedidoCabeceraItem", args)
            list = [OrdenPedidoSaveModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def RegistrarDB(Ent: OrdenPedidoSaveModel)-> int:
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

            return Ent.OrdenPedidoId
        except Exception as e:
            print(e)
            Restore()



    def ObtenerFiltroOCO()-> list[OrdenPedidoFiltroOCOModel] :
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_OrdenPedidoObtenerFiltroOCO", [])
            list = [OrdenPedidoFiltroOCOModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

