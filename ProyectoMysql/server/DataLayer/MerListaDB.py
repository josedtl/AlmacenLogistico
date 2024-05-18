from EntityLayer.MerListaEntity import MerListaItemModel, MerListaMainModel, MerListaSaveModel, MerListaTituloModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore, CloseConnection
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class MerListaDB:
    def GetItems(Codigo: any):
        try:
            args = (Codigo,)
            resulset = DBProcedure().DBProcedureConsult("sp_MerListaObtenerMain", args)
            list = [MerListaMainModel.Cargar(row) for row in resulset]
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
            args.append(Ent.Codigo)
            args.append(Ent.Nombre)
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
            
    def GetItemTitulo(Codigo: any):
        try:
            args = (Codigo,)
            resulset = DBProcedure().DBProcedureConsult("sp_MerListaObtenertitulo", args)
            list = [MerListaTituloModel.CargarItem(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItemLike(Codigo: str, Nombre: str):
        try:
            args = (
                Codigo,
                Nombre,
            )
            resulset = DBProcedure().DBProcedureConsult(
                "sp_MerListaBuscarItem", args
            )
            list = [MerListaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_MerListaObtenerItem", args)
            list = [MerListaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)