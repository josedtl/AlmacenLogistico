from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.SexoEntity import *


class SexoDB:
    def GetItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_SexoAllItems", [])
            list = [SexoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_SexoAllItem", args)
            list = [SexoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: SexoSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_Sexo_Update",
                ProcessActionEnum.Add: "sp_Sexo_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_Sexo_Save")
            args = []
            args.append(Ent.SexoId)
            args.append(Ent.Nombre)
            args.append(Ent.EstadoRegistro)
            Ent.SexoId = DBProcedure().DBProcedureInsertUpdate(Store, args, "v_SexoId")

            return Ent
        except Exception as e:
            print(e)
            Restore()
    def Delete(Id: int):
        try:
            args = (Id,)
            Val = DBProcedure().DBProcedureDalete("sp_Sexo_Delete", args)
            return ResponseAPI.Response(Val)
        except Exception as e:
            ErrorData(e)

    def GetItemLike(Nombre: str):
        try:
            args = (Nombre,)
            resulset = DBProcedure().DBProcedureConsult("sp_SexoItemLike", args)
            list = [SexoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
             print(e)

