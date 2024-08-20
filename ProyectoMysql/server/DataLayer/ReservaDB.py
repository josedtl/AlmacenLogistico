from EntityLayer.DespachoEntity import DespachoReservaOPModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.ReservaEntity import *


class ReservaDB:

            
    def GetMercaderiaMainItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_ReservaMercaderiaListaMain", [])
            list = [ReservaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
            
    def ReservarMercaderiaDB(Ent: ReservaMercaderiaOPModel):
        try:
   
            Store = "sp_ReservarMercaderiaItem"
            args = []
            args.append(Ent.MercaderiaId)
            args.append(Ent.Cantidad)
            args.append(Ent.OrdenPedidoDetalleId)
            Ent.MercaderiaId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_MercaderiaId"
            )
           
            return Ent
        except Exception as e:
            print(e)
            Restore()

    def ReservaPedido(MercaderiaId : int):
        try:
            args = []
            args.append(MercaderiaId)
            resulset = DBProcedure().DBProcedureConsult("sp_ReservaOrdenPedidoListaMain", args)
            list = [ReservaPedidoModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def ReservaResumen(MercaderiaId : int):
        try:
            args = []
            args.append(MercaderiaId)
            resulset = DBProcedure().DBProcedureConsult("sp_ReservaObtenerResumen", args)
            list = [ReservaResumenModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def ObtenerReservaOPItem(OrdenPedidoId : int):
        try:
            args = []
            args.append(OrdenPedidoId)
            resulset = DBProcedure().DBProcedureConsult("sp_ObtenerReservarOPItem", args)
            list = [DespachoReservaOPModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def ReservarDespachoDB(Ent: ReservaSaveModel):
        try:
   
            Store = "sp_RegistrarReservaDespacho"
            args = []
            args.append(Ent.ReservaId)
            args.append(Ent.OrdenPedidoId)
            args.append(Ent.OrdenPedidoDetalleId)
            args.append(Ent.MercaderiaId)
            args.append(Ent.Cantidad)
            args.append(Ent.StockId)

            Ent.MercaderiaId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_MercaderiaId"
            )
           
            return Ent
        except Exception as e:
            print(e)
            Restore()