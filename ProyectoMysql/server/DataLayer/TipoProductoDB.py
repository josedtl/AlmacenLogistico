from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.TipoProductoEntity import *


class TipoProductoDB:
    def GetItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_TipoProductoAllItems", [])
            list = [TipoProductoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_TipoProductoAllItem", args)
            list = [TipoProductoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: TipoProductoSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_TipoProducto_Update",
                ProcessActionEnum.Add: "sp_TipoProducto_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_TipoProducto_Save")
            args = []
            args.append(Ent.TipoProductoId)
            args.append(Ent.Nombre)
            args.append(Ent.FechaRegistro)
            args.append(Ent.CodUsuario)
            args.append(Ent.EstadoRegistro)
            Ent.TipoProductoId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_TipoProductoId"
            )

            return Ent
        except Exception as e:
            print(e)
            Restore()

    def Delete(Id: int):
        try:
            args = (Id,)
            Val = DBProcedure().DBProcedureDalete("sp_TipoProducto_Delete", args)
            return ResponseAPI.Response(Val)
        except Exception as e:
            ErrorData(e)

    def GetItemLike(Nombre: str):
        try:
            args = (Nombre,)
            resulset = DBProcedure().DBProcedureConsult("sp_TipoProductoItemLike", args)
            list = [TipoProductoItemModel.CargarLike(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
