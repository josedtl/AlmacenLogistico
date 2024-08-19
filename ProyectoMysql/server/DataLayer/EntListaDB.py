from EntityLayer.EntListaEntity import EntListaEntity, EntListaItemModel
from EntityLayer.MerListaEntity import MerListaSaveModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore,CloseConnection
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class EntListaDB:


    def RegistrarDB(Ent: MerListaSaveModel):
        try:
   
            store_mapping = {
                ProcessActionEnum.Update: "sp_MerLista_Actualizar",
                ProcessActionEnum.Add: "sp_MerLista_Registrar",
            }
            Store = store_mapping.get(Ent.Action, "sp_MerLista_Registrar")
            args = []
            args.append(Ent.ListaId)
            args.append(Ent.CampoId)
            args.append(Ent.Codigo)
            args.append(Ent.Nombre)
            args.append(Ent.Descripcion)
            args.append(Ent.CodUsuario)
            args.append(Ent.FechaRegistro)
            args.append(Ent.EstadoRegistro)
            args.append(Ent.CodigoTabla)
            Ent.ListaId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_ListaId"
            )

            return Ent
        except Exception as e:
            print(e)
            Restore()
            
    def BuscarItem(Codigo: str, Nombre : str ):
        try:
            args = (Codigo,Nombre)
            resulset = DBProcedure().DBProcedureConsult("sp_EnListaBuscarItem", args)
            list = [EntListaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)


    def ObtenerItem(ListaId: int):
        try:
            args = (ListaId,)
            resulset = DBProcedure().DBProcedureConsult("sp_EnListaObtenerItem", args)
            list = [EntListaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)


    def ObtenerItems(Codigo: str):
        try:
            args = (Codigo,)
            resulset = DBProcedure().DBProcedureConsult("sp_EnListaObtenerItems", args)
            list = [EntListaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
