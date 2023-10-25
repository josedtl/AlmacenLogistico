from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.CategoriaEntity import *


class CategoriaDB:
    def GetItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_CategoriaAllItems", [])
            list = [CategoriaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_CategoriaAllItem", args)
            list = [CategoriaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: CategoriaSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_Categoria_Update",
                ProcessActionEnum.Add: "sp_Categoria_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_Categoria_Save")
            args = []
            args.append(Ent.CategoriaId)
            args.append(Ent.Nombre)
            args.append(Ent.FechaRegistro)
            args.append(Ent.CodUsuario)
            args.append(Ent.EstadoRegistro)
            Ent.CategoriaId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_CategoriaId"
            )

            return Ent
        except Exception as e:
            print(e)
            Restore()

    def Delete(Id: int):
        try:
            args = (Id,)
            Val = DBProcedure().DBProcedureDalete("sp_Categoria_Delete", args)
            return ResponseAPI.Response(Val)
        except Exception as e:
            ErrorData(e)

    def GetItemLike(Nombre: str):
        try:
            args = (Nombre,)
            resulset = DBProcedure().DBProcedureConsult("sp_CategoriaItemLike", args)
            list = [CategoriaItemModel.CargarLike(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
