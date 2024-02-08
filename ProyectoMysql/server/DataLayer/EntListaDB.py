from EntityLayer.EntListaEntity import EntListaEntity
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore,CloseConnection
from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum


class EntListaDB:
    def GetItems(Codigo: any):
        try:
            args = (Codigo,)
            resulset = DBProcedure().DBProcedureConsult("sp_ListaEntidad_Items", args)
            print(args)
            list = [EntListaEntity.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
        finally:
            CloseConnection()

    def GetItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_ListaEntidad_Item", args)
            list = [EntListaEntity.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
        finally:
            CloseConnection()

    def GetItemLike(Codigo: str, Nombre: str):
        try:
            args = (
                Codigo,
                Nombre,
            )
            resulset = DBProcedure().DBProcedureConsult(
                "sp_ListaEntidad_ItemLike", args
            )
            list = [EntListaEntity.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
        finally:
            CloseConnection()
    # def Save(Ent: MarcaSaveModel):
    #     try:
    #         store_mapping = {
    #             ProcessActionEnum.Update: "sp_Marca_Update",
    #             ProcessActionEnum.Add: "sp_Marca_Save",
    #         }
    #         Store = store_mapping.get(Ent.Action, "sp_Marca_Save")
    #         args = []
    #         args.append(Ent.MarcaId)
    #         args.append(Ent.Nombre)
    #         args.append(Ent.FechaRegistro)
    #         args.append(Ent.CodUsuario)
    #         args.append(Ent.EstadoRegistro)
    #         Ent.MarcaId = DBProcedure().DBProcedureInsertUpdate(
    #             Store, args, "v_MarcaId"
    #         )

    #         return Ent
    #     except Exception as e:
    #         print(e)
    #         Restore()

    # def Delete(Id: int):
    #     try:
    #         args = (Id,)
    #         Val = DBProcedure().DBProcedureDalete("sp_Marca_Delete", args)
    #         return ResponseAPI.Response(Val)
    #     except Exception as e:
    #         ErrorData(e)
