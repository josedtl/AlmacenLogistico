from EntityLayer.ReservaEntity import ReservaDetalleModel
from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from .configMysql import get_connection
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.RecepcionEntity import *
from Utilidades.Conexion.ErrorData import ErrorData


class ReservaDetalleDB:

    def RegistrarDB(Ent: ReservaDetalleModel):
        try:
    
            Store = "sp_ReservarMercaderiaItem"
            # Ent.Codigo = datetime.now().strftime("%Y%m%d%H%M%S")
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


    def RegistrarLista (Items: list[ReservaDetalleModel]):
        try:
            for item in Items:
                ReservaDetalleDB.RegistrarDB(item) 
        except Exception as e:
            print(e)
            Restore()

