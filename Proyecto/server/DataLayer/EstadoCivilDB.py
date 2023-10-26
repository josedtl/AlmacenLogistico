from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.EstadoCivilEntity import *


class EstadoCivilDB:
    def GetItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_EstadoCivilAllItems", [])
            list = [EstadoCivilItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_EstadoCivilAllItem", args)
            list = [EstadoCivilItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: EstadoCivilSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_EstadoCivil_Update",
                ProcessActionEnum.Add: "sp_EstadoCivil_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_EstadoCivil_Save")
            args = []
            args.append(Ent.EstadoCivilId)
            args.append(Ent.Nombre)
            args.append(Ent.EstadoRegistro)
            Ent.EstadoCivilId = DBProcedure().DBProcedureInsertUpdate(Store, args, "v_EstadoCivilId")

            return Ent
        except Exception as e:
            print(e)
            Restore()
    def Delete(Id: int):
        try:
            args = (Id,)
            Val = DBProcedure().DBProcedureDalete("sp_EstadoCivil_Delete", args)
            return ResponseAPI.Response(Val)
        except Exception as e:
            ErrorData(e)

    def GetItemLike(Nombre: str):
        try:
            args = (Nombre,)
            resulset = DBProcedure().DBProcedureConsult("sp_EstadoCivilItemLike", args)
            list = [EstadoCivilItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
             print(e)

