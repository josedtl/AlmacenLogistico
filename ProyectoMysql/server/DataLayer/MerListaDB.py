from EntityLayer.EntListaEntity import EntListaEntity
from EntityLayer.MerListaEntity import MerListaSaveModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore, CloseConnection
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class MerListaDB:
    def GetItems(Codigo: any):
        try:
            args = (Codigo,)
            resulset = DBProcedure().DBProcedureConsult("sp_MerLista_Main", args)
            print(args)
            list = [EntListaEntity.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: MerListaSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_MerLista_Actualizar",
                ProcessActionEnum.Add: "sp_MerLista_Registrar",
            }
            Store = store_mapping.get(Ent.Action, "sp_MerLista_Registrar")
            args = []
            args.append(Ent.ListaId)
            args.append(Ent.CampoId)
            args.append(Ent.Nombre)
            args.append(Ent.Codigo)
            args.append(Ent.Descripcion)
            args.append(Ent.FechaRegistro)
            args.append(Ent.CodUsuario)
            args.append(Ent.EstadoRegistro)
            args.append(Ent.CodigoTabla)
            Ent.ListaId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_ListaId"
            )

            return Ent
        except Exception as e:
            print(e)
            Restore()
