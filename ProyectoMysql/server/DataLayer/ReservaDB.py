from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.ReservaEntity import *


class ReservaDB:

            
    def GetMercaderiaMainItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_ReservaMercaderiaListaMain", [])
            list = [ReservaEntity.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
            
    def ReservarMercaderia(Ent: ReservaMercaderiaOPModel):
        try:
   
            Store = "sp_ReservarMercaderiaItem"
            args = []
            args.append(Ent.MercaderiaId)
            args.append(Ent.Cantidad)
            args.append(Ent.OrdenPedidoDetalleId)
            Ent.MercaderiaId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "_MercaderiaId"
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