from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.MarcaEntity import *


class MarcaDB:
    def GetItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_MarcaAllItems", [])
            list = [MarcaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_MarcaAllItem", args)
            list = [MarcaItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: MarcaSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_Marca_Update",
                ProcessActionEnum.Add: "sp_Marca_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_Marca_Save")
            args = []
            args.append(Ent.MarcaId)
            args.append(Ent.Nombre)
            args.append(Ent.FechaRegistro)
            args.append(Ent.CodUsuario)
            args.append(Ent.EstadoRegistro)
            Ent.MarcaId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_MarcaId"
            )

            return Ent
        except Exception as e:
            print(e)
            Restore()

    def Delete(Id: int):
        try:
            args = (Id,)
            Val = DBProcedure().DBProcedureDalete("sp_Marca_Delete", args)
            return ResponseAPI.Response(Val)
        except Exception as e:
            ErrorData(e)

    def GetItemLike(Nombre: str):
        try:
            args = (Nombre,)
            resulset = DBProcedure().DBProcedureConsult("sp_MarcaItemLike", args)
            list = [MarcaItemModel.CargarLike(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
