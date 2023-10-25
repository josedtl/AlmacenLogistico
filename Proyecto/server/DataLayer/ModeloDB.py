from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.ModeloEntity import *


class ModeloDB:
    def GetItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_ModeloAllItems", [])
            list = [ModeloItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_ModeloAllItem", args)
            list = [ModeloItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: ModeloSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_Modelo_Update",
                ProcessActionEnum.Add: "sp_Modelo_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_Modelo_Save")
            args = []
            args.append(Ent.ModeloId)
            args.append(Ent.Nombre)
            args.append(Ent.FechaRegistro)
            args.append(Ent.CodUsuario)
            args.append(Ent.EstadoRegistro)
            Ent.ModeloId = DBProcedure().DBProcedureInsertUpdate(
                Store, args, "v_ModeloId"
            )

            return Ent
        except Exception as e:
            print(e)
            Restore()

    def Delete(Id: int):
        try:
            args = (Id,)
            Val = DBProcedure().DBProcedureDalete("sp_Modelo_Delete", args)
            return ResponseAPI.Response(Val)
        except Exception as e:
            ErrorData(e)

    def GetItemLike(Nombre: str):
        try:
            args = (Nombre,)
            resulset = DBProcedure().DBProcedureConsult("sp_ModeloItemLike", args)
            list = [ModeloItemModel.CargarLike(row) for row in resulset]
            return list
        except Exception as e:
            print(e)
