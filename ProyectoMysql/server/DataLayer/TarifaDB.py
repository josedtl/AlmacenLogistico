from EntityLayer.TarifaEntity import *
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.OrdenPedidoEntity import *
from DataLayer.OrdenPedidoDetalleDB import OrdenPedidoDetalleDB



class TarifaDB:
    def ObtenerMain()-> list[TarifaMainModel] :
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_Tarifa_ObtenerMain", [])
            list = [TarifaMainModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def RegistrarDB(Ent: TarifaSaveModel)-> TarifaSaveModel:
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_Tarifa_Update",
                ProcessActionEnum.Add: "sp_Tarifa_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_Tarifa_Save")
            # Ent.Codigo = datetime.now().strftime("%Y%m%d%H%M%S")
            args = []
            args.append(Ent.TarifaId)
            args.append(Ent.UnidadMedidaId)
            args.append(Ent.MonedaId)
            args.append(Ent.PorcentajeImpuestoId)
            args.append(Ent.PrecioSinInpuesto)
            args.append(Ent.PrecioConInpuesto)
            args.append(Ent.MercaderiaId)
            args.append(Ent.FechaCreacion)
            args.append(Ent.Vigente)
            Ent.TarifaId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_TarifaId"
            )


            return Ent
        except Exception as e:
            print(e)
            Restore()
